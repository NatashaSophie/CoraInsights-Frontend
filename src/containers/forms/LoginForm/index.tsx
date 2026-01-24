import React, { useEffect } from 'react';

import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Loading from '@/components/Loading';
import TextField from '@/components/TextField';
import client from '@/graphql/client';
import { useLoginMutation } from '@/graphql/generated/graphql';
import { useAppDispatch } from '@/hooks/state';
import { addAlert } from '@/store/alerts/slice';
import { setToken, setUserId, setUser } from '@/store/user/slice';

import validationSchema from './validationSchema';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mutation = useLoginMutation({
    onSuccess: ({ login }) => {
      const { jwt, user } = login;
      const token = `Bearer ${jwt}`;

      if (jwt) {
        client.setHeader('Authorization', token);
        dispatch(setToken(token));
        dispatch(setUserId(user.id));
        dispatch(setUser({
          id: user.id,
          name: user.name,
          email: user.email,
          userType: user.userType,
          organizationType: user.organizationType,
          organizationName: user.organizationName,
          businessName: user.businessName,
          merchantApproved: user.merchantApproved,
          merchantApprovedBy: user.merchantApprovedBy,
          merchantApprovedAt: user.merchantApprovedAt,
          role: user.role,
        }));

        // Redireciona baseado no tipo de usuário
        const userType = user.userType || 'pilgrim';
        const roleType = user.role?.type;
        const merchantApproved = user.merchantApproved;

        if (roleType === 'authenticated' && userType === 'admin') {
          router.push('/admin');
        } else if (userType === 'manager') {
          router.push('/gestor');
        } else if (userType === 'merchant' && merchantApproved) {
          // Comerciante aprovado vai para área de comerciante
          router.push('/comerciante');
        } else {
          // Peregrinos e comerciantes não aprovados vão para área de peregrino
          router.push('/peregrino');
        }
      }
    },
    onError: () => {
      dispatch(
        addAlert({
          message: 'Email ou senha inválidos',
          type: 'error',
        })
      );
    },
  });

  useEffect(() => {
    client.setHeader('Authorization', '');
  }, []);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        mutation.mutate(values);
      }}
    >
      <Form className="w-full mt-8 flex flex-col gap-6">
        <TextField type="email" name="email" label="Email" rightIcon="email" />
        <TextField
          type="password"
          name="password"
          label="Senha"
          rightIcon="lock"
        />
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`btn btn-primary`}
        >
          <Loading isLoading={mutation.isLoading}>Continuar</Loading>
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

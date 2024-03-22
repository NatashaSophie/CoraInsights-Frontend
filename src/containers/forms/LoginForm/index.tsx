import React, { useEffect } from 'react';

import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import validationSchema from './validationSchema';
import Loading from '@/components/Loading';
import TextField from '@/components/TextField';
import client from '@/graphql/client';
import { useLoginMutation } from '@/graphql/generated/graphql';
import { useAppDispatch } from '@/hooks/state';
import { addAlert } from '@/store/alerts/slice';
import { setToken, setUserId } from '@/store/user/slice';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mutation = useLoginMutation({
    onSuccess: ({ login }) => {
      const { jwt } = login;
      const token = `Bearer ${jwt}`;

      if (jwt) {
        client.setHeader('Authorization', token);
        dispatch(setToken(token));
        dispatch(setUserId(login.user.id));

        router.push('/trilhas');
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

import React from 'react';

import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Loading from '@/components/Loading';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import {
  Enum_Userspermissionsuser_Sex,
  useCreateUserMutation,
} from '@/graphql/generated/graphql';
import { useAppDispatch } from '@/hooks/state';
import { addAlert } from '@/store/alerts/slice';
import { convertInputValueToDate } from '@/utils/date';
import birthdateMask from '@/utils/masks/birthdate';

import validationSchema from './validationSchema';

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const mutation = useCreateUserMutation({
    onSuccess: () => {
      dispatch(
        addAlert({
          message: 'Conta criada com sucesso!',
          type: 'success',
        })
      );
      router.push('/login');
    },
    onError: (error: { message: string }) => {
      let message =
        'Não foi possível criar a conta, tente novamente mais tarde!';

      if (
        error.message.includes(
          'Cannot return null for non-nullable field UsersPermissionsUser.id'
        )
      ) {
        message = 'Este e-mail já se encontra em uso!';
      }

      dispatch(
        addAlert({
          message,
          type: 'error',
        })
      );
    },
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        birthdate: '',
        sex: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        mutation.mutate({
          ...values,
          sex: values.sex as Enum_Userspermissionsuser_Sex,
          birthdate: convertInputValueToDate(values.birthdate),
        });
      }}
    >
      <Form className="w-full mt-8 flex flex-col gap-4">
        <TextField type="text" name="name" label="Nome" rightIcon="account" />
        <TextField type="email" name="email" label="Email" rightIcon="email" />
        <TextField
          type="text"
          name="birthdate"
          label="Data de nascimento"
          rightIcon="calendar"
          maskFunction={birthdateMask}
        />
        <Select
          options={[
            {
              name: 'Masculino',
              value: 'Male',
            },
            {
              name: 'Feminino',
              value: 'Female',
            },
          ]}
          name="sex"
          label="Sexo"
        />
        <TextField
          type="password"
          name="password"
          label="Senha"
          rightIcon="lock"
          autoComplete="new-password"
        />
        <TextField
          type="password"
          name="passwordConfirmation"
          autoComplete="new-password"
          label="Repita sua senha"
          rightIcon="lock"
        />
        <button
          type="submit"
          disabled={mutation.isLoading || mutation.isSuccess}
          className={`btn btn-primary`}
        >
          <Loading isLoading={mutation.isLoading}>Registrar</Loading>
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;

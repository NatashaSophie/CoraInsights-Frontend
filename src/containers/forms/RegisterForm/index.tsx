import React, { useState } from 'react';

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
  const [userType, setUserType] = useState<'pilgrim' | 'manager' | 'merchant'>('pilgrim');

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
        userType: 'pilgrim',
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
      {({ values, setFieldValue }) => (
        <Form className="w-full mt-8 flex flex-col gap-4">
          {/* Tipo de Usuário */}
          <div className="mb-4">
            <label className="text-white text-sm font-medium mb-2 block">
              Tipo de Cadastro
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setUserType('pilgrim');
                  setFieldValue('userType', 'pilgrim');
                }}
                className={`py-3 px-4 rounded-lg transition-all ${
                  values.userType === 'pilgrim'
                    ? 'bg-white text-primary-500 font-semibold'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Peregrino
              </button>
              <button
                type="button"
                onClick={() => {
                  setUserType('merchant');
                  setFieldValue('userType', 'merchant');
                }}
                className={`py-3 px-4 rounded-lg transition-all ${
                  values.userType === 'merchant'
                    ? 'bg-white text-primary-500 font-semibold'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Comerciante
              </button>
            </div>
            {values.userType === 'merchant' && (
              <p className="text-white/70 text-xs mt-2">
                ⚠️ Seu cadastro como comerciante precisará ser aprovado por um gestor.
                Após a aprovação, você poderá cadastrar seus estabelecimentos.
                Até lá, você terá acesso apenas às funcionalidades de peregrino.
              </p>
            )}
          </div>

          {/* Campos Comuns */}
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

          {/* Campos Específicos para Gestor */}
          {values.userType === 'manager' && (
            <>
              <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-4">
                <p className="text-white text-sm">
                  ⚠️ Gestores só podem ser cadastrados por administradores.
                  Se você precisa de acesso como gestor, entre em contato com a administração.
                </p>
              </div>
            </>
          )}

          {/* Campos Específicos para Comerciante - REMOVIDOS */}
          {/* Estabelecimentos devem ser cadastrados após aprovação na página específica */}

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
      )}
    </Formik>
  );
};

export default RegisterForm;

import React, { useState } from 'react';

import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Icon from '@/components/Icon';
import Loading from '@/components/Loading';
import TextField from '@/components/TextField';
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from '@/graphql/generated/graphql';
import { addAlert } from '@/store/alerts/slice';

import {
  validationSchemaFirstStep,
  validationSchemaSecondStep,
  validationSchemaThirdStep,
} from './validationSchema';

const ResetPasswordForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  onClose,
  isOpen,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [code, setCode] = useState<string>();
  const dispatch = useDispatch();

  const forgotPasswordMutation = useForgotPasswordMutation({
    onSuccess: () => {
      setStep(2);
    },
    onError: () => {
      dispatch(
        addAlert({
          message: 'E-mail não encontrado!',
          type: 'error',
        })
      );
    },
  });

  const resetPasswordMutation = useResetPasswordMutation({
    onSuccess: () => {
      dispatch(
        addAlert({
          message: 'Senha alterada com sucesso!',
          type: 'success',
        })
      );

      onClose();
    },
    onError: () => {
      dispatch(
        addAlert({
          message: 'Erro ao resetar a senha!',
          type: 'error',
        })
      );
    },
  });

  return (
    <div
      className={classNames(
        'absolute  overflow-hidden flex flex-col justify-end bottom-0 left-0 h-full w-full bg-gray-900 bg-opacity-75 z-20',
        {
          'max-h-screen': isOpen,
          'max-h-0 ': !isOpen,
        }
      )}
    >
      <button className="w-full flex-1" onClick={onClose} />
      <div
        className={classNames(
          'bg-white tåransition-all duration-700 w-full h-[90%] rounded-t-3xl p-6',
          {
            'max-h-screen': isOpen,
            'max-h-0 ': !isOpen,
          }
        )}
      >
        <div className="w-full flex">
          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-gray-500"
          >
            <Icon name="close" />
          </button>
        </div>
        {step === 1 && (
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchemaFirstStep}
            onSubmit={(values) => {
              forgotPasswordMutation.mutate(values);
            }}
          >
            <Form className="w-full mt-8 flex flex-col gap-6">
              <p className="text-lg leading-7 font-bold text-center">
                Um código será gerado e enviado para o e-mail indicado abaixo
              </p>
              <TextField type="email" name="email" label="Email" />
              <button
                type="submit"
                disabled={forgotPasswordMutation.isLoading}
                className={`btn btn-primary`}
              >
                <Loading isLoading={forgotPasswordMutation.isLoading}>
                  ENVIAR
                </Loading>
              </button>
            </Form>
          </Formik>
        )}
        {step === 2 && (
          <Formik
            initialValues={{
              code: '',
            }}
            validationSchema={validationSchemaSecondStep}
            onSubmit={(values) => {
              setCode(values.code);
              setStep(3);
            }}
          >
            <Form className="w-full mt-8 flex flex-col gap-6">
              <p className="text-lg leading-7 font-bold text-center">
                Insira o código enviado para o seu e-mail
              </p>
              <TextField type="text" name="code" label="Código" />
              <button type="submit" className={`btn btn-primary`}>
                ENVIAR
              </button>
            </Form>
          </Formik>
        )}
        {step === 3 && (
          <Formik
            initialValues={{
              password: '',
              passwordConfirmation: '',
            }}
            validationSchema={validationSchemaThirdStep}
            onSubmit={(values) => {
              if (code) {
                resetPasswordMutation.mutate({
                  code,
                  ...values,
                });
              }
            }}
          >
            <Form className="w-full mt-8 flex flex-col gap-6">
              <p className="text-lg leading-7 font-bold text-center">
                Insira sua nova senha
              </p>
              <TextField type="password" name="password" label="Nova senha" />
              <TextField
                type="password"
                name="passwordConfirmation"
                label="Confirmar Nova senha"
              />
              <button
                type="submit"
                disabled={resetPasswordMutation.isLoading}
                className={`btn btn-primary`}
              >
                <Loading isLoading={resetPasswordMutation.isLoading}>
                  ENVIAR
                </Loading>
              </button>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordForm;

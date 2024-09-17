import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import Logo from '@/assets/Logo';
import LoginForm from '@/containers/forms/LoginForm';
import ResetPasswordForm from '@/containers/forms/ResetPasswordForm';
import client from '@/graphql/client';
import { Meta } from '@/layout/Meta';
import { resetUser } from '@/store/user/slice';
import { Main } from '@/templates/Main';

const Login = () => {
  const dispatch = useDispatch();
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  useEffect(() => {
    dispatch(resetUser());
    client.setHeader('Authorization', '');
  }, [dispatch]);

  return (
    <Main meta={<Meta title="Login | Caminho de Cora" />}>
      <ResetPasswordForm
        isOpen={openForgotPassword}
        onClose={() => setOpenForgotPassword(false)}
      />
      <div className="p-8 flex flex-col items-center w-full h-full">
        <div>
          <Logo />
        </div>
        <div className="w-full mt-auto">
          <LoginForm />
        </div>
        {/* <p
          onClick={() => setOpenForgotPassword(true)}
          className="mt-6 underline text-sm font-medium text-white text-center"
        >
          Esqueci minha senha
        </p> */}
      </div>
    </Main>
  );
};

export default Login;

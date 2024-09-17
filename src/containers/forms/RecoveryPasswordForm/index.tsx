import React from 'react';

import { Form, Formik } from 'formik';

import TextField from '@/components/TextField';

import validationSchema from './validationSchema';

const RecoveryPasswordForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log({ values });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-xs w-full mt-8 flex flex-col gap-6">
          <TextField
            type="email"
            name="email"
            label="Email"
            rightIcon="email"
          />
          <button
            type="submit"
            className={`btn btn-outline ${isSubmitting ? 'loading' : ''}`}
          >
            Continuar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RecoveryPasswordForm;

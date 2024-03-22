import * as Yup from 'yup';

export const validationSchemaFirstStep = Yup.object({
  email: Yup.string()
    .required('Este campo é obrigatório!')
    .email('Email inválido!'),
});

export const validationSchemaSecondStep = Yup.object({
  code: Yup.string().required('Este campo é obrigatório!'),
});

export const validationSchemaThirdStep = Yup.object({
  password: Yup.string().required('Este campo é obrigatório!'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais!')
    .required('Este campo é obrigatório'),
});

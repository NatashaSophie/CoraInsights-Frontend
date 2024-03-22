import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Este campo é obrigatório!')
    .email('Email inválido!'),
  password: Yup.string().required('Este campo é obrigatório!'),
});

export default validationSchema;

import React from 'react';

import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import validationSchema from './validationSchema';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import UserAvatar from '@/components/UserAvatar';
import {
  Enum_Userspermissionsuser_Sex,
  useUpdateUserMutation,
} from '@/graphql/generated/graphql';
import { addAlert } from '@/store/alerts/slice';
import { userSelector } from '@/store/user/selectors';
import { convertInputValueToDate } from '@/utils/date';
import birthdateMask from '@/utils/masks/birthdate';

const EditProfileForm: React.FC = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector(userSelector);
  const updateUserMutation = useUpdateUserMutation({
    onSuccess: () => {
      dispatch(
        addAlert({
          message: 'Perfil salvo com sucesso!',
          type: 'success',
        })
      );

      queryClient.invalidateQueries('getUser');
    },
  });
  return (
    <Formik
      initialValues={{
        name: user.name || '',
        email: user.email,
        birthdate: user.birthdate || '',
        sex: user.sex,
        avatar: undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (user.id) {
          updateUserMutation.mutate({
            ...values,
            userId: user?.id,
            sex: values.sex as Enum_Userspermissionsuser_Sex,
            birthdate: convertInputValueToDate(values.birthdate),
          });
        }
      }}
    >
      {(props) => (
        <Form className="max-w-xs w-full mx-auto flex flex-col gap-6">
          <div className="mx-auto">
            <UserAvatar
              onUploadNewAvatar={({ upload }) =>
                props.setFieldValue('avatar', upload.id)
              }
            />
          </div>
          <TextField
            disabled
            type="email"
            name="email"
            label="Email"
            rightIcon="email"
          />
          <TextField type="text" name="name" label="Nome" rightIcon="account" />
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
          <button
            type="submit"
            className={classNames(`btn btn-outline`, {
              loading: updateUserMutation.isLoading,
            })}
          >
            Salvar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfileForm;

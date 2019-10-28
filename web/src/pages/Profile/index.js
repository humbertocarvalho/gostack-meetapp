import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Botao } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatchEvent = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data, { resetForm }) {
    dispatchEvent(updateProfileRequest(data));
    resetForm(profile);
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <Botao>
          <button type="submit">
            <MdAddCircleOutline color="#fff" size={22} />
            <p>Salvar perfil</p>
          </button>
        </Botao>
      </Form>
    </Container>
  );
}

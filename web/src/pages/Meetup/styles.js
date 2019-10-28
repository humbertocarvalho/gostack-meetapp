import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  .loading {
    display: flex;
    justify-content: center;
  }

  input {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);

      height: 44px;
      padding: 10px 15px;
      color: #fff;
      margin: 0 0 10px;
      height: 250px;
      border: 0;
      border-radius: 4px;
      resize: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    > span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }
`;

export const Botao = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;

    align-items: center;
    justify-content: center;

    margin: 5px 0 0;
    width: 180px;
    height: 44px;

    background: #f94d6a;

    border: 0;
    border-radius: 4px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 900px;
      height: 300px;
      border-radius: 4px;
      border: 0;
      background: #eee;
    }

    input {
      display: none;
    }
  }

  span.erro {
    color: red;
    font-weight: bold;
    font-size: 14px;
    margin: 0 0 10px;
  }
`;

export const SelectImage = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 900px;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  opacity: 0.3;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }
`;

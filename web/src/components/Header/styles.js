import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 60px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #ffffff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Logout = styled.button`
  background: #f94d6a;
  width: 71px;
  height: 42px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#f94d6a')};
  }
`;

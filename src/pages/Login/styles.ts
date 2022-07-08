import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 64px;
  left: 16px;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
    top: 30%;
    left: 10%;
  }
  @media (min-width: 1300px) {
    left: 30%;
  }
`;

export const Sinc_logo = styled.img`
  height: 100px;
  margin-bottom: 24px;

  @media (min-width: 500px) {
    height: 200px;
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 500px) {
    margin-left: 100px;
  }
`;

const login_input_CSS = css`
  width: 340px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;
export const Sinc_email = styled.input`${login_input_CSS}`;
export const Password = styled.input`${login_input_CSS}`;

export const Pass_recover = styled.p`
  color: var(--white);
  font-size: 20px;
  font-weight: 400;

  &:hover {
    color: var(--sinc-dark-color);
  }
`;


export const Login_button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 40px;
  border-radius: 16px;
  margin-top: 16px;

  background: var(--primary);
  border: 2px solid var(--sinc-light-color);
  cursor: pointer;

  > p {
    color: var(--sinc-light-color);
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    background: var(--sinc-button-dark-hover);
  }
`;
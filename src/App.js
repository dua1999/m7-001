import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  background: linear-gradient(
    90deg,
    rgba(141, 194, 111, 1) 0%,
    rgba(118, 184, 82, 1) 50%
  );
  font-family: sans-serif;
  margin: 0;}
`;

const Page = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
`;

const Form = styled.form`
  position: relative;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
`;

const P = styled.p`
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
`;

const A = styled.a`
  color: #4caf50;
  text-decoration: none;
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Page>
        <Form>
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />
          <Button> log in </Button>
          <P>
            Not registered? <A>Create an account</A>
          </P>
        </Form>
      </Page>
    </div>
  );
}

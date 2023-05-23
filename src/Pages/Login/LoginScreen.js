import { useState } from "react";
import Button from "../../components/Global/Button/Button";
import Container from "../../components/Global/Container/Container";
import Input from "../../components/Global/Input/Input";
import Title from "../../components/Global/Title/Title";
import useMutation from "../../hooks/useMutation";
import style from "./LoginScreen.module.css";

const LoginScreen = ({ onLogin, initialError }) => {

  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };

  return (
    <Container>
      <Title>Inloggen</Title>
      <form onSubmit={handleSubmit}>
        {error || initialError ? <p className={style.error}>{initialError ?? error}</p> : ''}
        <label htmlFor="username">Username</label>
        <Input name="username" value={data.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <Input name="password" value={data.password} onChange={handleChange} />
        <Button type="submit" disabled={isLoading}> Login </Button>
        <Button type="submit" disabled={isLoading} onClick={handleRegister}> Register </Button>
      </form>
    </Container>
  );
};

export default LoginScreen;

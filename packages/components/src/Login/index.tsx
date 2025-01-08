import React, { useState } from "react";
import "./Login.css";
import Typography from "../Typography";
import Input from "../input";
import Button from "../button";

export interface LoginFormProps
  extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit?: (data: { id: string; pw: string }) => void;
}
export const Login: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (id === "" && pw === "") {
      alert("아이디 또는 비밀번호를 입력해 주세요");
    } else if (onSubmit) {
      onSubmit({ id, pw });
      alert(`아이디: ${id}, 비밀번호: ${pw}`);
    }
  };

  return (
    <form className="login_form" onSubmit={handleLogin}>
      <Typography variant="h2" color="default" align="center" bold>
        로그인
      </Typography>
      <Input
        placeholder="아이디를 입력하세요"
        className="login_input"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        placeholder="비밀번호를 입력하세요"
        type="password"
        className="login_input"
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <Button
        type="submit"
        className="login_button"
        variant="primary"
        size="medium"
      >
        로그인
      </Button>
    </form>
  );
};

export default Login;

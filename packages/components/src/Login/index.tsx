import React, { useState } from "react";
import "./Login.css";
import Typography from "../Typography";
import Input from "../input";

interface LoginProps {
  onSubmit?: (data: { id: string; pw: string }) => void;
}

export const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`아이디: ${id}, 비밀번호: ${pw}`);
    if (onSubmit) {
      onSubmit({ id, pw });
    }
  };

  return (
    <form className="login_form">
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
      <button type="submit" className="login_button" onClick={handleLogin}>
        로그인
      </button>
    </form>
  );
};

Login.displayName = "Login";
export default Login;

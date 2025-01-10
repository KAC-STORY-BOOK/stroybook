import React, { HTMLAttributes, useState } from "react";
import "./Account.css";
import { emailRegex, nameRegex, passwordRegex } from "../../util/regexUtils";
import { Typography, Input, Button } from "../../index";
import Alert from "../Alert/Alert";
export interface AccountProps extends HTMLAttributes<HTMLFormElement> {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Account: React.FC<AccountProps> = ({
  name,
  email,
  password,
  confirmPassword,
  ...props
}) => {
  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    password: password || "",
    confirmPassword: confirmPassword || "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    emailValid: false,
    password: false,
    confirmPassword: false,
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let emailError = "";
    let passwordError = "";
    let confirmError = "";
    let nameError = "";

    let currentErrors = {
      name: false,
      emailValid: false,
      password: false,
      confirmPassword: false,
    };

    if (formData.email === "") {
      currentErrors.emailValid = true;
      emailError = "이메일을 입력해 주세요.";
    } else if (!emailRegex.test(formData.email)) {
      currentErrors.emailValid = true;
      emailError = "유효하지 않은 이메일 형식입니다.";
    } else {
      setErrors((prevData) => ({ ...prevData, emailValid: false }));
    }

    if (formData.password === "") {
      currentErrors.password = true;
      passwordError = "비밀번호를 입력해 주세요.";
    } else if (!passwordRegex.test(formData.password)) {
      passwordError = "비밀번호 8자 이상, 대소문자 및 숫자를 포함해야 합니다.";
      currentErrors.password = true;
    } else {
      setErrors((prevData) => ({ ...prevData, password: false }));
    }

    if (formData.confirmPassword === "") {
      currentErrors.confirmPassword = true;
      confirmError = "비밀번호를 다시 입력해 주세요.";
    } else if (formData.password !== formData.confirmPassword) {
      confirmError = "비밀번호가 일치하지 않습니다.";
      currentErrors.confirmPassword = true;
    } else {
      setErrors((prevData) => ({ ...prevData, confirmPassword: false }));
    }

    if (formData.name === "") {
      currentErrors.name = true;
      nameError = "이름을 입력해 주세요";
    } else if (!nameRegex.test(formData.name)) {
      nameError = "이름은 문자만 가능합니다.";
      currentErrors.name = true;
    } else {
      setErrors((prevData) => ({ ...prevData, name: false }));
    }
    setErrorMessage({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmError,
      name: nameError,
    });

    setErrors(currentErrors);
    const isValid = Object.values(currentErrors).every((error) => !error);

    if (isValid) {
      setShowAlert(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        {...props}
        className="account_form"
        onKeyDown={handleKeyDown}
      >
        <Typography variant="h2" color="default" align="center" bold>
          회원가입
        </Typography>

        <div>
          <label className="account_label">이름</label>
          <Input
            className="login_input"
            style={{ width: "100%" }}
            placeholder="이름을 입력하세요"
            errorMessage={errors.name}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errorMessage.name && (
            <Typography
              variant="span"
              color="error"
              align="center"
              className="account_error"
            >
              {errorMessage.name}
            </Typography>
          )}
        </div>

        <div>
          <label className="account_label">이메일</label>
          <Input
            className="login_input"
            style={{ width: "100%" }}
            placeholder="이메일을 입력하세요"
            errorMessage={errors.emailValid}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errorMessage.email && (
            <Typography
              variant="span"
              color="error"
              align="center"
              className="account_error"
            >
              {errorMessage.email}
            </Typography>
          )}
        </div>

        <div>
          <label className="account_label">비밀번호</label>
          <Input
            className="login_input"
            style={{ width: "100%" }}
            placeholder="비밀번호를 입력하세요."
            errorMessage={errors.password}
            type="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />

          {errorMessage.password && (
            <Typography
              variant="span"
              color="error"
              align="center"
              className="account_error"
            >
              {errorMessage.password}
            </Typography>
          )}
        </div>

        <div>
          <label className="account_label">비밀번호 재입력</label>
          <Input
            className="login_input"
            style={{ width: "100%" }}
            placeholder="비밀번호를 다시 한 번 입력하세요."
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            errorMessage={errors.confirmPassword}
            value={formData.confirmPassword}
          />
          {errorMessage.confirmPassword && (
            <Typography
              variant="span"
              color="error"
              align="center"
              className="account_error"
            >
              {errorMessage.confirmPassword}
            </Typography>
          )}
        </div>

        <Button
          type="submit"
          className="login_button"
          variant="primary"
          size="medium"
        >
          회원가입
        </Button>
      </form>
      {showAlert && (
        <Alert
          content="회원가입이 성공적으로 완료되었습니다!"
          onClose={() => setShowAlert(false)} // 닫기 버튼 클릭 시 Alert 숨김
        />
      )}
    </>
  );
};

export default Account;

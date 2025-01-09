// 이메일 유효성 검사 정규표현식
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 비밀번호 유효성 검사 정규표현식 (8자 이상, 대소문자 및 숫자, 기호 포함)
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
// 전화번호 유효성 검사 정규표현식 (010-1234-5678 형식)
export const phoneRegex = /^010-\d{4}-\d{4}$/;

// URL 유효성 검사 정규표현식
export const urlRegex =
  /^(https?:\/\/)?([\w\-])+\.([a-z]{2,6})([\/\w\-.]*)*\/?$/;

// 이름 유효성 검사 정규표현식 (문자자만 허용)
export const nameRegex = /^[가-힣a-zA-Z]+$/;

export interface LoginDataType {
  id: number;
  title: string;
  placeholder?: string;
  type: string;
}

export const LoginData: LoginDataType[] = [
  { id: 0, title: "Email", placeholder: "이메일을 입력하세요", type: "email" },
  {
    id: 1,
    title: "Password",
    placeholder: "비밀번호를 입력하세요",
    type: "password",
  },
];

export interface SignUpType {
  id: number;
  title: string;
  placeholder?: string;
  type: string;
}

export const SignupData: SignUpType[] = [
  { id: 0, title: "Email", placeholder: "이메일을 입력하세요", type: "email" },
  {
    id: 1,
    title: "Password",
    placeholder: "비밀번호를 입력하세요",
    type: "password",
  },
  {
    id: 2,
    title: "RePassword",
    placeholder: "비밀번호 재확인",
    type: "password",
  },
  // { id: 3, title: "Mobile", placeholder: "핸드폰 번호를 입력하세요" },
];

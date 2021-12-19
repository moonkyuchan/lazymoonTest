export interface LoginDataType {
  id: number;
  title: string;
  placeholder?: string;
}

export const LoginData: LoginDataType[] = [
  { id: 0, title: "ID", placeholder: "아이디를 입력하세요" },
  { id: 1, title: "Password", placeholder: "비밀번호를 입력하세요" },
  { id: 2, title: "Re Password", placeholder: "비밀번호 재확인" },
];

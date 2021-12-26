export interface SignUpType {
  id: number;
  title: string;
  placeholder?: string;
}

export const SignupData: SignUpType[] = [
  { id: 0, title: "ID", placeholder: "아이디를 입력하세요" },
  { id: 1, title: "Password", placeholder: "비밀번호를 입력하세요" },
  { id: 2, title: "Re Password", placeholder: "비밀번호 재확인" },
  { id: 3, title: "Mobile", placeholder: "핸드폰 번호를 입력하세요" },
];

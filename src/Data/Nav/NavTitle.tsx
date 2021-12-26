export interface NavTitleType {
  id?: number;
  title?: string;
  path?: string | undefined;
}

export const NavTitle: NavTitleType[] = [
  { id: 0, title: "HOME", path: "/" },
  { id: 1, title: "Profile", path: "/profile" },
  { id: 2, title: "Github" },
  { id: 3, title: "NEWS", path: "/news" },
];

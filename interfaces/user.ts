export type view = 'list' | 'grid';
export type mode = 'dark' | 'light' | 'system';
export type theme = {
  primary: string;
  secondary: string;
};

export default interface user {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  projectView: view;
  stackView: view;
  toolView: view;
  theme: theme;
  mode: mode;
}

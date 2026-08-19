export interface UserInterface {
  id: string;
  name: string;
  email: string;
  zip: string;
}

export type UserContextType = {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};

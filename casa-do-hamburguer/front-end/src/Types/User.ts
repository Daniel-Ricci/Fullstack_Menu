export interface UserInterface {
  id: string;
  name: string;
  email: string;
  zip: string;
  admin: boolean;
}

export type UserContextType = {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};

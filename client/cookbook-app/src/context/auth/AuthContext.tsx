import { FC, ReactNode, createContext, useState } from "react";

export interface AuthContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextType>({
  token: '',
  setToken: () => {},
});

interface Props {
  children?: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") ?? ""
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

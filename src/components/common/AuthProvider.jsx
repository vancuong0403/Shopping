import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function AuthProvider({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const [isLogged, setIsLogged] = useState(!!accessToken);
  const [isComment, setIsComment] = useState(false);

  const login = (dataUser) => {
    console.log({ dataUser });
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
    setIsComment(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        login,
        logout,
        isComment,
        setIsComment,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

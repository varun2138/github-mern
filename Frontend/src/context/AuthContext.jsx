import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/v1/auth/check", {
          credentials: "include",
        });
        const data = await response.json();

        setAuthUser(data.user);
      } catch (error) {
        console.error("Error while fetching : ", error.message);
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

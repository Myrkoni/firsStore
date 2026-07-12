import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

export const useLogin = () => {
  const { changeAutState } = useAuthContext();

  const loginHandler = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    changeAutState(data);

    return data;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAutState } = useAuthContext();

  const registerHandler = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    changeAutState(data);

    return data;
  };

  return registerHandler;
};

export const useLogout = () => {
  const { logout: localLogout } = useAuthContext();

  const logoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    localLogout();
  };

  return logoutHandler;
};

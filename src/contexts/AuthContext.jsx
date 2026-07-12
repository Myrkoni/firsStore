import { createContext, useContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAutState: (authState = {}) => null,
    logout: () => null,
});

export function AuthContextProvider(props) {

    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAutState = (state) => {
        setAuthState(state);
    };

    const logout = () => {
        setAuthState(null)
    }

    const contextData = {
        userId: authState?.user?.id,
        email: authState?.user?.email,
        accessToken: authState?.session?.access_token,
        isAuthenticated: !!authState?.user?.email,
        changeAutState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}
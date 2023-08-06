import {createContext, useContext, useState} from "react";




const Auth = createContext(null)



export const useAuth = () => {
    return useContext(Auth)
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') ) ?? null);
    function signIn(newUser, callBack)  {
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser));
        callBack()
    }
    function signOut(callBack) {
        setUser(null)
        callBack()
        localStorage.removeItem('user')
    }


    const currentUser = {
        user,
        signIn,
        signOut
    }


    return (
        <Auth.Provider value={currentUser}>
            {children}
        </Auth.Provider>
    )
}
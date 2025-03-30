// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     const login = (userData) => {
//         localStorage.setItem("user", JSON.stringify(userData));
//         localStorage.setItem("token");
//         setUser(userData);
//     };

    

//     const logout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         setUser(null);
//     };
    
//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     return useContext(AuthContext);
// };


import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    useEffect(() => {
        const storedUser  = localStorage.getItem("user");
        if (storedUser ) {
            setUser (JSON.parse(storedUser ));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        // localStorage.setItem("token",JSON.stringify(userData)); // Ensure token is stored
        setUser (userData); // This will trigger a re-render in components using this context
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser (null); // This will trigger a re-render in components using this context
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
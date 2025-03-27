import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", JSON.stringify(userData));
        setUser(userData);
    };

    

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    // const login = (userData) => {
    //     localStorage.setItem("user", JSON.stringify(userData));
    //     setUser(userData);
    //     window.dispatchEvent(new Event("storage")); // 🔥 Force Navbar to update
    // };
    
    // const logout = () => {
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("token");
    //     setUser(null);
    //     window.dispatchEvent(new Event("storage")); // 🔥 Force Navbar to update
    // };
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

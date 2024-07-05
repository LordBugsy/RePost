import React, { createContext, useState } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    //these are just some "test" users that you can log on and test the results of successful login
    const [users, setUsers] = useState([
        { username: "alice21", password: "alice21password", email: "alice@example.com" },
        { username: "SUPERBOB", password: "bobpassword2", email: "bob@example.com" },
        { username: "Charlie", password: "charliepassword3", email: "charlie@example.com" },
        { username: "David", password: "davidpassword4", email: "david@example.com" },
        { username: "professionalGamer21", password: "gamerpassword5", email: "gamergoat@example.com" },
        { username: "username", password: "password", email: "email@example.com" }
    ]);

    //we're stting currentUser to null by default so if the user enters the SuccessfulLogin page without enserting any info, he'll be met by the default logins
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};
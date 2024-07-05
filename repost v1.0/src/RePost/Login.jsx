import React, { useState, useEffect, useContext } from "react";
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { UserContext } from './UserContext'; 

const Login = () => {
    const { users, setCurrentUser } = useContext(UserContext);
    const [userName, setUsername] = useState('');
    const [passWord, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 

    const signInUser = (event) => {
        const loginInfo = document.getElementById("loginInfo");
        loginInfo.textContent = "";

        //if the user is in the db, do this
        if (event.target.closest("form").checkValidity()) {
            event.preventDefault(); 
            if (userExists(userName, passWord)) {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    const user = users.find(user => user.username === userName && user.password === passWord);
                    setCurrentUser(user);
                    navigate('/successful-login');
                }, Math.floor(Math.random() * 2500) + 1000);
            } 
            
            else {
                loginInfo.textContent = "Incorrect Username or Password.";
            }
        }
    }

    useEffect(() => {
        document.title = `RePost - Login`;
    }, []);

    //if the username and the password matches a query in the db, return true, else false
    const userExists = (name, password) => {
        return users.some(user => user.username === name && user.password === password);
    }

    return (
        <div className={styles.background}>
            <form className={styles.form} action="">
                <div className={styles.logIn}>
                    <div>
                        <h1 className={styles.header}>RePost</h1>
                    </div>

                    <div className={styles.input}>
                        <label id="usernameLabel">Username</label>
                        <input type="text" value={userName} minLength="3" maxLength="20" onChange={(e) => setUsername(e.target.value)} required /> <br />
                    </div>

                    <div className={styles.input}>
                        <label>Password</label>
                        <input type="password" value={passWord} minLength='5' onChange={(e) => setPassword(e.target.value)} required />  <br />
                    </div>

                    <div className={styles.input}>
                        <p id="loginInfo" className={styles.loginInfo}></p>
                    </div>

                    <button type="submit" className={`${styles.button} ${styles.signup}`} onClick={signInUser}>Login</button> <br />

                    {/*loading animation */}
                    {isLoading && <Loading />}

                    <Link to='/signup'>
                        <p className={styles.login}>Don't have an account?</p>
                    </Link>
                    <p className={styles.copyright}>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
                </div>
            </form>
        </div>
    );
}

export default Login;

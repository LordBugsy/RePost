import React, { useState, useEffect, useContext } from "react";
import styles from './Login.module.css';
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const SignUp = () => {
    const { users, setUsers, setCurrentUser } = useContext(UserContext); 
    const [userName, setUsername] = useState('');
    const [passWord, setPassword] = useState('');
    const [mail, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ username: '', email: '' });

    //we will use navigate to navigate to a component, using <Component /> or <Link> would've caused errors
    const navigate = useNavigate(); 

    const signInUser = (event) => {
        event.preventDefault();
        setError({ username: '', email: '' });

        if (event.target.closest("form").checkValidity() && !userExists(userName) && !emailExists(mail)) {
            setIsLoading(true);
            setTimeout(() => {
                const newUser = { username: userName, password: passWord, email: mail };
                setUsers(u => [...u, newUser]);
                setCurrentUser(newUser); //currentUser is now set
                setIsLoading(false);
                navigate('/successful-login'); //we can now navigate user to the successful login page
            }, Math.floor(Math.random() * 2500) + 1000); //the loading animation will last between 1 and 3.5s
        } 
        
        else {
            let newError = { username: '', email: '' };
            if (userExists(userName)) {
                newError.username = `'${userName}' is already used.`;
            }

            if (emailExists(mail)) {
                newError.email = `'${mail}' is already used.`;
            }
            setError(newError);
        }
    };

    //returns true or false if the username (or email) entered already exists in UserContext, aka our DB
    const userExists = name => users.some(user => user.username === name);
    const emailExists = mail => users.some(user => user.email === mail);

    useEffect(() => {
        document.title = `RePost - Sign Up`;
    }, []);

    return (
        <div className={styles.background}>
            <form className={styles.form} onSubmit={signInUser}>
                <div className={styles.signIn}>
                    <div>
                        <h1 className={styles.header}>RePost</h1>
                    </div>

                    <div className={styles.input}>
                        <label>Email <span className={styles.spanInfo} id="emailLabel">{error.email}</span></label>
                        <input type="email" value={mail} onChange={(e) => setEmail(e.target.value)} required />  <br />
                    </div>

                    <div className={styles.input}>
                        <label>Username <span className={styles.spanInfo} id="usernameLabel">{error.username}</span></label>
                        <input type="text" value={userName} minLength="3" maxLength="20" onChange={(e) => setUsername(e.target.value)} required /> <br />
                    </div>

                    <div className={styles.input}>
                        <label>Password</label>
                        <input type="password" value={passWord} minLength='5' onChange={(e) => setPassword(e.target.value)} required />  <br />
                    </div>

                    <button type="submit" className={`${styles.button} ${styles.signup}`}>Sign Up</button> <br />

                    {/*loading animation*/}
                    {isLoading && <Loading />}

                    <div>
                        <p className={styles.info}>By registering, you agree to RePost's <a href="https://github.com/LordBugsy" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="https://github.com/LordBugsy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p>
                    </div>

                    <Link to="/login">
                        <p className={styles.login}>Already have an account?</p>
                    </Link>
                    <p className={styles.copyright}>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

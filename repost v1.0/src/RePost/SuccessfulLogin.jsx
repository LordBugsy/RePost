import React, { useEffect, useContext } from 'react';
import styles from './RePost.module.css';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const SuccessfulLogin = () => {
    //get the currentUser
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        document.title = 'RePost - Successfully logged in';
    }, []);

    return (
        <div className={styles.background}>
            <div className={`${styles.loginResult}`}>
                <h1 className={styles.logo}>RePost</h1>
                <div className={styles.row}>
                    <i className={`ri-user-line me-2 ${styles.icon}`}></i>
                    {/*heres where setting currentUser to null was useful: if currentUser is set, then we return the username, else "Guest"  */}
                    <h1 className={styles.info}>Username: <span className={styles.userInfo}>{currentUser ? currentUser.username : 'Guest'}</span></h1>
                </div>

                <div className={styles.row}>
                    <i className={`ri-lock-line me-2 ${styles.icon}`}></i>
                    {/*same here for the password */}
                    <h1 className={styles.info}>Password: <span className={styles.userInfo}>{currentUser ? currentUser.password : 'defaultPassword'}</span></h1>
                </div>

                <Link to="/signup">
                    <button className={styles.logOut}>Log Out</button>
                </Link>

                <p className={styles.copyright}>Copyright © 2024 LordBugsy. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default SuccessfulLogin;

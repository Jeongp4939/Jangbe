import styles from './styles.module.css';

export default function Login() {
    return(
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}>로그인</h1>
            <label className={styles.loginLabel} htmlFor="id">아이디:</label>
            <input className={styles.loginInput} type="text" id="id" name="id" />
            <br />
            <br />
            <br />
            <label className={styles.loginLabel} htmlFor="password">패스워드:</label>
            <input className={styles.loginInput} type="password" id="password" name="password" />
        </div>
    )
}

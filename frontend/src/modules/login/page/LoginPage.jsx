import "../styles/login-page.css";

export function LoginPage() {
    return (
        <div className="login-wrapper">
            <div className="login-modal">
                <h1>Sign In</h1>
                <form>
                    <label className="login-label">
                        Username:
                        <input type="text" className="username-input" />
                    </label>
                    <label className="login-label">
                        Password:
                        <input type="password" className="password-input" />
                    </label>
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
            <div className="login-signup">
                <h5 className="login-h5">Welcome Back!</h5>
                <h5 className="login-h5">Welcome back to SafeTrace! Manage your <br></br> baranggay complaints.</h5>
                <button className="login-signup-button" type="submit">No account yet? Signup</button>
            </div>
        </div>
    )
}
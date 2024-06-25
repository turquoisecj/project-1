import "../styles/login-page.module.css";

export function LoginPage() {
    return (
        <div className="wrapper">
            <div className="login-modal">
                <h1>Sign In</h1>
                <form>
                    <label>
                        Username:
                        <input type="text" className="username-input" />
                    </label>
                    <label>
                        Password:
                        <input type="password" className="password-input" />
                    </label>
                </form>
            </div>     
        </div>
    )
}
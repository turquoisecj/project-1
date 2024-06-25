export function Form() {
    return (
        <form className="register-form">
            <label className="label-input">
                Account Type:
                <select className="account-type">
                    <option>
                        Civilian
                    </option>
                </select>
            </label>
            <label className="label-input">
                Username:
                <input type="text" className="input-user" />
            </label>
            <label className="label-input">
                Password:
                <input type="password" className="input-password" />
            </label>
            <button>Sign Up</button>
        </form>
    );
}
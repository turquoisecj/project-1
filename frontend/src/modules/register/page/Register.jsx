import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { LoginPrompt } from "../components/LoginPrompt";
import "../styles/register.css";

export function Register() {
    return (
        <div class="register-bg">
            <div class="register-modal">
                <Header />
                <Form />
            </div>
            <div class="login-prompt-container">
                <LoginPrompt />
            </div>
        </div>
    );
}
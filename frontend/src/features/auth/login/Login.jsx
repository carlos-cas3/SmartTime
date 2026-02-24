import AuthLayout from "../layout/AuthLayout";
import LoginForm from "./LoginForm";
import { authApi } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = async (codigo, password) => {
        try {
            const data = await authApi.login({ codigo, password });
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/dashboard");
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthLayout title="SMARTFISI">
            <LoginForm onLogin={handleLogin} />
        </AuthLayout>
    );
}

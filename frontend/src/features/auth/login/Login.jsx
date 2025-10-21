import AuthLayout from "../layout/AuthLayout";

import LoginForm from "./LoginForm";

export default function Login() {
    const handleLogin = (userData) => {
        console.log("Login con:", userData);
    };

    return (
        <AuthLayout title="SMARTFISI">
            <LoginForm onLogin={handleLogin} />
        </AuthLayout>
    );
}

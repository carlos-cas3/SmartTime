import AuthLayout from "../layout/AuthLayout";
import LoginForm from "./LoginForm";

export default function Login() {

    const handleLogin = (userData) => {
    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    })
        .then(res => res.json())
        .then(data => {
            console.log("LOGIN OK:", data);
            localStorage.setItem("token", data.token);
        })
        .catch(err => console.error(err));
};


    return (
        <AuthLayout title="SMARTFISI">
            <LoginForm onLogin={handleLogin} />
        </AuthLayout>
    );
}

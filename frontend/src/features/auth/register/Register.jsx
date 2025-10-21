import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "./RegisterForm";

export default function Register() {
    const handleRegister = (userData) => {
        console.log("Registro con:", userData);
    };

    return (
        <AuthLayout title="SMARTFISI">
            <RegisterForm onRegister={handleRegister} />
        </AuthLayout>
    );
}

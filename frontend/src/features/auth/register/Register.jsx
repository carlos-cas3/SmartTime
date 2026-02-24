import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "./RegisterForm";
import { authApi } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        try {
            await authApi.register(formData);
            navigate("/login");
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthLayout title="SMARTFISI">
            <RegisterForm onRegister={handleRegister} />
        </AuthLayout>
    );
}

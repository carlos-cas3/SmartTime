import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "./RegisterForm";

export default function Register() {

    const handleRegister = async (userData) => {
        try {
            const response = await fetch(
                "http://localhost:3000/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error en el registro");
            }

            console.log("REGISTER OK:", data);
            // aquí luego puedes redirigir a login
            // navigate("/login");

        } catch (error) {
            console.error("REGISTER ERROR:", error.message);
        }
    };

    return (
        <AuthLayout title="SMARTFISI">
            <RegisterForm onRegister={handleRegister} />
        </AuthLayout>
    );
}

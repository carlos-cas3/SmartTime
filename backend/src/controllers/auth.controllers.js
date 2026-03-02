const authService = require("../services/auth.service");

exports.register = async (req, res) => {
    try {
        const {
            nombre,
            codigo,
            correo,
            facultad,
            password,
        } = req.body;

        if (!nombre || !codigo || !correo || !password) {
            return res.status(400).json({
                message: "Todos los campos son obligatorios",
            });
        }

        const user = await authService.register({
            nombre,
            codigo,
            correo,
            facultad,
            password,
        });

        res.status(201).json({
            message: "Usuario registrado correctamente",
            user,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { codigo, password } = req.body;

        if (!codigo || !password) {
            return res.status(400).json({
                message: "CÃ³digo y password son obligatorios",
            });
        }

        const { user, token } = await authService.login({ codigo, password });

        res.status(200).json({
            message: "Login exitoso",
            user,
            token,
        });

    } catch (error) {
        res.status(401).json({
            message: error.message,
        });
    }
};

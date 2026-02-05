const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../data/users");

const JWT_SECRET = process.env.JWT_SECRET || "123456789abcdef";


exports.register = async ({ nombre, codigo, correo, facultad, password }) => {
    // 1. Verificar si existe por correo o código
    const existingUser = users.find(
        (u) => u.correo === correo || u.codigo === codigo
    );

    if (existingUser) {
        throw new Error("El usuario ya existe");
    }

    // 2. Hashear password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Crear usuario
    const newUser = {
        id: users.length + 1,
        nombre,
        codigo,
        correo,
        facultad,
        password: hashedPassword,
    };

    users.push(newUser);

    // 4. Nunca devolver password
    return {
        id: newUser.id,
        nombre: newUser.nombre,
        codigo: newUser.codigo,
        correo: newUser.correo,
        facultad: newUser.facultad,
    };
};


exports.login = async ({ codigo, password }) => {
    const user = users.find((u) => u.codigo === codigo);
    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Password incorrecto");
    }

    const token = jwt.sign(
        {
            id: user.id,
            codigo: user.codigo,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    return {
        token,
        user: {
            id: user.id,
            nombre: user.nombre,
            codigo: user.codigo,
            correo: user.correo,
            facultad: user.facultad,
        },
    };
};

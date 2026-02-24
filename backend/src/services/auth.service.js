const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const supabase = require("../config/supabase");

const JWT_SECRET = process.env.JWT_SECRET || "123456789abcdef";

exports.register = async ({ nombre, codigo, correo, facultad, password }) => {

    // 1. Verificar si ya existe
    const { data: existingUser } = await supabase
        .from("users")
        .select("id")
        .or(`codigo.eq.${codigo},correo.eq.${correo}`)
        .single();

    if (existingUser) {
        throw new Error("El usuario ya existe");
    }

    // 2. Hashear password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Insertar usuario
    const { data: user, error } = await supabase
        .from("users")
        .insert({
            nombre,
            codigo,
            correo,
            facultad,
            password: hashedPassword,
        })
        .select("id, nombre, codigo, correo, facultad, rol")
        .single();

    if (error) {
        throw new Error("Error al registrar usuario");
    }

    return user;
};

exports.login = async ({ codigo, password }) => {

    // 1. Buscar usuario
    const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("codigo", codigo)
        .single();

    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    // 2. Verificar password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Password incorrecto");
    }

    // 3. Crear JWT
    const token = jwt.sign(
        {
            id: user.id,
            codigo: user.codigo,
            rol: user.rol,
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
            rol: user.rol,
        },
    };
};

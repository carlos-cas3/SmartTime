const supabase = require("../config/supabase");

exports.getProfile = async (userId) => {
    const { data, error } = await supabase
        .from("users")
        .select("id, nombre, codigo, correo, facultad, rol, created_at")
        .eq("id", userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.updateProfile = async (userId, userData) => {
    const { data, error } = await supabase
        .from("users")
        .update({
            nombre: userData.nombre,
            correo: userData.correo,
            facultad: userData.facultad,
        })
        .eq("id", userId)
        .select("id, nombre, codigo, correo, facultad, rol, created_at")
        .single();

    if (error) throw new Error(error.message);
    return data;
};

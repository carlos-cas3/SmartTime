const supabase = require("../config/supabase");
const { formatDate } = require("../utils/dateHelpers");

exports.getAll = async (userId) => {
    const { data, error } = await supabase
        .from("extras")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
};

exports.getById = async (id, userId) => {
    const { data, error } = await supabase
        .from("extras")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.create = async (userId, extraData) => {
    const { data, error } = await supabase
        .from("extras")
        .insert({
            user_id: userId,
            title: extraData.title,
            category: extraData.category,
            status: extraData.status || "pending",
            date: formatDate(extraData.date),
            priority: extraData.priority || "medium",
            matriz: extraData.matriz,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.update = async (id, userId, extraData) => {
    const { data, error } = await supabase
        .from("extras")
        .update({
            title: extraData.title,
            category: extraData.category,
            status: extraData.status,
            date: formatDate(extraData.date),
            priority: extraData.priority,
            matriz: extraData.matriz,
        })
        .eq("id", id)
        .eq("user_id", userId)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.delete = async (id, userId) => {
    const { error } = await supabase
        .from("extras")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return { message: "Extra deleted successfully" };
};

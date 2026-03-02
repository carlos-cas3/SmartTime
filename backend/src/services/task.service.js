const supabase = require("../config/supabase");
const { formatDate } = require("../utils/dateHelpers");

exports.getAll = async (userId) => {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
};

exports.getById = async (id, userId) => {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.create = async (userId, taskData) => {
    const { data, error } = await supabase
        .from("tasks")
        .insert({
            user_id: userId,
            title: taskData.title,
            category: taskData.category,
            status: taskData.status || "pending",
            date: formatDate(taskData.date),
            priority: taskData.priority || "medium",
            matriz: taskData.matriz,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.update = async (id, userId, taskData) => {
    const { data, error } = await supabase
        .from("tasks")
        .update({
            title: taskData.title,
            category: taskData.category,
            status: taskData.status,
            date: formatDate(taskData.date),
            priority: taskData.priority,
            matriz: taskData.matriz,
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
        .from("tasks")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return { message: "Task deleted successfully" };
};

const supabase = require("../config/supabase");
const { formatDate } = require("../utils/dateHelpers");

exports.getAll = async (userId) => {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
};

exports.getById = async (id, userId) => {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.create = async (userId, projectData) => {
    const { data, error } = await supabase
        .from("projects")
        .insert({
            user_id: userId,
            title: projectData.title,
            category: projectData.category,
            status: projectData.status || "pending",
            date: formatDate(projectData.date),
            priority: projectData.priority || "medium",
            matriz: projectData.matriz,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.update = async (id, userId, projectData) => {
    const { data, error } = await supabase
        .from("projects")
        .update({
            title: projectData.title,
            category: projectData.category,
            status: projectData.status,
            date: formatDate(projectData.date),
            priority: projectData.priority,
            matriz: projectData.matriz,
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
        .from("projects")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return { message: "Project deleted successfully" };
};

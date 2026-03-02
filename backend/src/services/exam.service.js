const supabase = require("../config/supabase");
const { formatDate } = require("../utils/dateHelpers");

exports.getAll = async (userId) => {
    const { data, error } = await supabase
        .from("exams")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
};

exports.getById = async (id, userId) => {
    const { data, error } = await supabase
        .from("exams")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.create = async (userId, examData) => {
    const { data, error } = await supabase
        .from("exams")
        .insert({
            user_id: userId,
            title: examData.title,
            category: examData.category,
            status: examData.status || "pending",
            date: formatDate(examData.date),
            priority: examData.priority || "medium",
            matriz: examData.matriz,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.update = async (id, userId, examData) => {
    const { data, error } = await supabase
        .from("exams")
        .update({
            title: examData.title,
            category: examData.category,
            status: examData.status,
            date: formatDate(examData.date),
            priority: examData.priority,
            matriz: examData.matriz,
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
        .from("exams")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return { message: "Exam deleted successfully" };
};

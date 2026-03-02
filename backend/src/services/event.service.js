const supabase = require("../config/supabase");

exports.getAll = async (userId) => {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("user_id", userId)
        .order("start", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
};

exports.getById = async (id, userId) => {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.create = async (userId, eventData) => {
    const { data, error } = await supabase
        .from("events")
        .insert({
            user_id: userId,
            title: eventData.title,
            type: eventData.type || "clase",
            start: eventData.start,
            end: eventData.end,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.update = async (id, userId, eventData) => {
    const { data, error } = await supabase
        .from("events")
        .update({
            title: eventData.title,
            type: eventData.type,
            start: eventData.start,
            end: eventData.end,
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
        .from("events")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return { message: "Event deleted successfully" };
};

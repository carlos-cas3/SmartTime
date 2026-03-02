const supabase = require("../config/supabase");

exports.getAll = async (userId) => {
    const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data;
};

exports.markAsRead = async (id, userId) => {
    const { data, error } = await supabase
        .from("notifications")
        .update({ read: true })
        .eq("id", id)
        .eq("user_id", userId)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

exports.markAllAsRead = async (userId) => {
    const { data, error } = await supabase
        .from("notifications")
        .update({ read: true })
        .eq("user_id", userId)
        .eq("read", false);

    if (error) throw new Error(error.message);
    return { message: "All notifications marked as read" };
};

exports.delete = async (id, userId) => {
    const { error } = await supabase
        .from("notifications")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (error) throw new Error(error.message);
    return { message: "Notification deleted successfully" };
};

exports.create = async (userId, notificationData) => {
    const { data, error } = await supabase
        .from("notifications")
        .insert({
            user_id: userId,
            title: notificationData.title,
            message: notificationData.message,
            type: notificationData.type || "info",
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

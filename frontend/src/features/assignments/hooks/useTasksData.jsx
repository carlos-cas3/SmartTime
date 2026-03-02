import { useState, useEffect } from "react";
import { tasksApi } from "../../../utils/api";

export default function useTasksData() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const data = await tasksApi.getAll();
            setTasks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const createTask = async (taskData) => {
        const newTask = await tasksApi.create(taskData);
        setTasks((prev) => [...prev, newTask]);
        return newTask;
    };

    const updateTask = async (id, taskData) => {
        const updated = await tasksApi.update(id, taskData);
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
        );
        return updated;
    };

    const deleteTask = async (id) => {
        await tasksApi.delete(id);
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    return {
        tasks,
        loading,
        error,
        createTask,
        updateTask,
        deleteTask,
        refreshTasks: fetchTasks,
    };
}

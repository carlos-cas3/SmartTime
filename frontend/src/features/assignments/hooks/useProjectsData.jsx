import { useState, useEffect } from "react";
import { projectsApi } from "../../../utils/api";

export default function useProjectsData() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const data = await projectsApi.getAll();
            setProjects(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const createProject = async (projectData) => {
        const newProject = await projectsApi.create(projectData);
        setProjects((prev) => [...prev, newProject]);
        return newProject;
    };

    const updateProject = async (id, projectData) => {
        const updated = await projectsApi.update(id, projectData);
        setProjects((prev) =>
            prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
        );
        return updated;
    };

    const deleteProject = async (id) => {
        await projectsApi.delete(id);
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };

    return {
        projects,
        loading,
        error,
        createProject,
        updateProject,
        deleteProject,
        refreshProjects: fetchProjects,
    };
}

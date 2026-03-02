import { useState, useEffect } from "react";
import { examsApi } from "../../../utils/api";

export default function useExamsData() {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchExams = async () => {
        try {
            setLoading(true);
            const data = await examsApi.getAll();
            setExams(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExams();
    }, []);

    const createExam = async (examData) => {
        const newExam = await examsApi.create(examData);
        setExams((prev) => [...prev, newExam]);
        return newExam;
    };

    const updateExam = async (id, examData) => {
        const updated = await examsApi.update(id, examData);
        setExams((prev) =>
            prev.map((e) => (e.id === id ? { ...e, ...updated } : e))
        );
        return updated;
    };

    const deleteExam = async (id) => {
        await examsApi.delete(id);
        setExams((prev) => prev.filter((e) => e.id !== id));
    };

    return {
        exams,
        loading,
        error,
        createExam,
        updateExam,
        deleteExam,
        refreshExams: fetchExams,
    };
}

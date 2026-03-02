import { useState, useEffect } from "react";
import { extrasApi } from "../../../utils/api";

export default function useExtrasData() {
    const [extras, setExtras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchExtras = async () => {
        try {
            setLoading(true);
            const data = await extrasApi.getAll();
            setExtras(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExtras();
    }, []);

    const createExtra = async (extraData) => {
        const newExtra = await extrasApi.create(extraData);
        setExtras((prev) => [...prev, newExtra]);
        return newExtra;
    };

    const updateExtra = async (id, extraData) => {
        const updated = await extrasApi.update(id, extraData);
        setExtras((prev) =>
            prev.map((e) => (e.id === id ? { ...e, ...updated } : e))
        );
        return updated;
    };

    const deleteExtra = async (id) => {
        await extrasApi.delete(id);
        setExtras((prev) => prev.filter((e) => e.id !== id));
    };

    return {
        extras,
        loading,
        error,
        createExtra,
        updateExtra,
        deleteExtra,
        refreshExtras: fetchExtras,
    };
}

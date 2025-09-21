"use client";

import { useState, useEffect } from "react";

export function usePagination<T>(url: string, pageSize = 10) {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${url}?page=${page}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then(setData)
            .finally(() => setLoading(false));
    }, [url, page, pageSize]);

    return { data, page, setPage, loading };
}
'use client'
import { useEffect, useState } from "react";
import { getDaysAhead } from "@/lib/utils/date";

export default function useCalendar() {

    const dayRange = 3;

    const [dateFrom, setDateFrom] = useState<Date | null>(null);
    const [dateTo, setDateTo] = useState<Date | null>(null);

    const handleGoForwards = () => {
        setDateFrom(prev => {
            if (!prev) return null;
            const date = new Date(prev);
            date.setDate(new Date(prev).getDate() + 1);
            return date;
        });
    };

    const handleGoBackwards = () => {
        setDateFrom(prev => {
            if (!prev) return null;
            const date = new Date(prev);
            date.setDate(new Date(prev).getDate() - 1);
            return date;
        });
    };

    useEffect(() => {
        setDateFrom(new Date());
    }, []);

    useEffect(() => {
        if (!dateFrom) return;
        setDateTo(getDaysAhead(dateFrom, dayRange));
    }, [dateFrom]);

    return {
        dateFrom,
        dateTo,
        goForwards: handleGoForwards,
        goBackwards: handleGoBackwards,
    };

}

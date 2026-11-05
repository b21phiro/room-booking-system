'use client'
import { useEffect, useState } from "react";
import { getDaysAhead } from "@/lib/utils/date";

export default function useCalendar() {

    const today = new Date();
    const dayRange = 3;

    const [dateFrom, setDateFrom] = useState(today);
    const [dateTo, setDateTo] = useState(getDaysAhead(dateFrom, dayRange));

    const handleGoForwards = () => {
        setDateFrom(prev => {
            const date = new Date(prev);
            date.setDate(new Date(prev).getDate() + 1);
            return date;
        });
    };

    const handleGoBackwards = () => {
        setDateFrom(prev => {
            const date = new Date(prev);
            date.setDate(new Date(prev).getDate() - 1);
            return date;
        });
    };

    useEffect(() => {
        setDateTo(getDaysAhead(dateFrom, dayRange));
    }, [dateFrom]);

    return {
        dateFrom,
        dateTo,
        goForwards: handleGoForwards,
        goBackwards: handleGoBackwards,
    };

}

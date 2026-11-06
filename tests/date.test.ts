import { describe, expect, test } from "vitest";
import {getDatesBetween} from "@/lib/utils/date";

describe("date", () => {

    describe("getDatesBetween", () => {

        test("The returning date between 2026-11-05 and 2026-11-07 should be 2026-11-06", () => {
            expect(getDatesBetween(new Date("2026-11-05"), new Date("2026-11-07"))).toEqual([new Date("2026-11-06")]);
        });

        test("The returning date between 2026-11-02 and 2026-11-05 should be 2026-11-03 and 2026-11-04", () => {
            expect(getDatesBetween(new Date("2026-11-02"), new Date("2026-11-05"))).toEqual([new Date("2026-11-03"), new Date("2026-11-04")]);
        });

    });

});
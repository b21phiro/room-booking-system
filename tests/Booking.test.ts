import { describe, test, expect } from "vitest";
import { Booking } from "@/lib/models/Booking";

describe("Booking", () => {

    const booking = new Booking({ id: 0, room: 0, to_date: "2026-11-02T09:00:00+01:00", from_date: "2026-11-02T10:00:00+01:00", firstname: "Walter", surname: "White" });

    test("Returns the first name", () => {
        expect(booking.firstName).toBe("Walter");
    });

    test("Returns the surname", () => {
        expect(booking.surName).toBe("White");
    });

    test("Returning the full name", () => {
        expect(booking.fullName).toBe("Walter White");
    });

});
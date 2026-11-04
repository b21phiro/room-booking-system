import { Room } from "@/lib/models/Room";
import { describe, expect, test } from "vitest";

describe("Room", () => {

    const room = new Room(0, "Sigtuna", 4);

    test("retrieving room id", () => {
       expect(room.id).toBe(0);
    });

    test("retrieving room capacity", () => {
        expect(room.capacity).toBe(4);
    });

    test("retrieving room name", () => {
        expect(room.name).toBe("Sigtuna");
    });

});
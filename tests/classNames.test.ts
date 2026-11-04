import { describe, expect, test } from "vitest";
import classNames from "@/lib/utils/classNames";

describe("classNames", () => {

    test("combining bg-red-500 and text-red-900", () => {
        expect(classNames('bg-red-500', 'text-red-900')).toBe('bg-red-500 text-red-900');
    });

});
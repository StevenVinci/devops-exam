const { isEmpty, isTagValid} = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});


describe("validations tests suites - isTagValid", () => {
    test("should return a boolean", () => {
        const result = isTagValid("abcefgijkl$1");
        expect(result).toBe(true);
    });
});
// TODO: Create tests suite for validation function

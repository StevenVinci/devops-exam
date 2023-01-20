const { isEmpty, isTagValid } = require("../validations");

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
    test("should return false as a tag with a length < 8 is provided", () => {
        const result = isTagValid("salut");
        expect(result).toBe(false);
    });
    test("should return false as a tag with 0 special charachter is provided", () => {
        const result = isTagValid("abcefgijkl15");
        expect(result).toBe(false);
    });
    test("should return false as a tag with 0 number is provided", () => {
        const result = isTagValid("abcefgijkl$fezf");
        expect(result).toBe(false);
    });
});
// TODO: Create tests suite for validation function

import {decodeMorseCode} from "../src/solution";

describe("Decode Morse", function() {
    it("shouls return A when decode given ·−", () => {
        expect(decodeMorseCode(".-")).toEqual("A");
    });

    it("shouls return E when decode given ·", () => {
        expect(decodeMorseCode(".")).toEqual("E");
    });

    it("shouls return HEY when decode given ···· · −·−−", () => {
        expect(decodeMorseCode(".... . -.--")).toEqual("HEY");
    });

    it("shouls return HEY JUDE when decode given ···· · −·−−   ·−−− ··− −·· ·", () => {
        expect(decodeMorseCode(".... . -.--   .--- ..- -.. .")).toEqual("HEY JUDE");
    });

    it("shouls return SOS when decode given ...---...", () => {
        expect(decodeMorseCode("...---...")).toEqual("SOS");
    });
});

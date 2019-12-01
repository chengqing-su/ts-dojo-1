import {decodeMorseCode} from "../src/solution";

describe("Decode Morse", function() {
    it('shouls return A when decode given ·−', () => {
        expect(decodeMorseCode('·−')).toEqual('A');
    });

    it('shouls return E when decode given ·', () => {
        expect(decodeMorseCode('·')).toEqual('E');
    });
});

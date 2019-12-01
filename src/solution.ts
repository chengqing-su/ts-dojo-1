import {MorseCode} from "./morseCode";

const parseOneWord = (morseCode: string): string => {
   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
   // @ts-ignore
   return morseCode.split(" ").map(value => MorseCode[value]).join("");
};

export const decodeMorseCode = (morseCode: string): string => {
   return morseCode.split("   ").map(value => parseOneWord(value)).join(" ");
};

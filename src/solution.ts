import MorseCode from "./morseCode";

export function decodeMorseCode(morseCode: string): string {
   // @ts-ignore
   return MorseCode[morseCode]
}

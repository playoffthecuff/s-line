export const CRLFtoLF = (s: string) => s.replace(/\r\n/g, "\n");

export const removeTrailingWhitespaces = (s: string) => s.replace(/[ \t]+$/gm, "");

export const singleEndLineBreak = (s: string) => s.replace(/\n?$/, "\n");

export const normalizeFileContentStr = (s: string) => CRLFtoLF(removeTrailingWhitespaces(singleEndLineBreak(s)));

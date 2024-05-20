// Yeah, I know sentences don't end with a comma, but I didn't want to add a separate case
// for phrases ending with a comma, so I just left it like this.
const splitTextToSentences = (text: string): string[] => text.split(/(?<=[.!?,])\s/);
const isQuestion = (sentence: string): boolean => sentence.endsWith("?");
const hasQuestionInverted = (sentence: string): boolean => sentence.startsWith("¿");
const isExclamation = (sentence: string): boolean => sentence.endsWith("!");
const hasExclamationInverted = (sentence: string): boolean => sentence.startsWith("¡");
const getSentenceStart = (sentence: string): string =>
  isQuestion(sentence) && !hasQuestionInverted(sentence)
    ? "¿"
    : isExclamation(sentence) && !hasExclamationInverted(sentence)
    ? "¡"
    : "";

export const fixInvertedPunctuation = (spanishText: string): string =>
  splitTextToSentences(spanishText)
    .map(sentence => `${getSentenceStart(sentence)}${sentence}`)
    .join(" ");

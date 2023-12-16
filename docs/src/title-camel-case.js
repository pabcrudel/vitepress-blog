/**
 * The `titleCamelCase` function takes a hyphen-separated string and converts it
 * to camel case by capitalizing the first letter of each word and removing the
 * hyphens.
 * @param title - The title parameter is a string that represents a title with
 * words separated by hyphens.
 * @returns a string with the words from the input title converted to camel
 * case.
 */
export function titleCamelCase(title) {
  // Splits the title by the hyphens and stores each word into an array
  const words = title.split('-');

  // Returns each word with the first letter in upper case
  const capitalizedWords = words.map(word => {
    const firstLetterCapitalized = word.charAt(0).toUpperCase();
    const titleWithoutFirstLetter = word.slice(1);

    return firstLetterCapitalized + titleWithoutFirstLetter;
  });

  /* Returns the words concatenates in the same string but with a white space
   * between them
  */
  return capitalizedWords.join(' ');
}

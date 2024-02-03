// import raw from "../../data/genres.txt";

export const generateChatCompletionprompt = (artists: string[]) => {
  const tags = fetch("../../data / genres.txt")
    .then(r => r.text())
    .then(text => {
      console.log('text decoded:', text);
      return text
    });
  const base = "\nArtist Names: ";
  artists.forEach(a => tags + a);
  const prompt = "\nChoose music genre tags from the list that best describe the set of artists given."
  const constraint = "\nOutput must be: an array of string, contains only tags, up to 5 tags"
  return tags + base + prompt + constraint;
}
import genreOptions from "../../data/genres.json"

export const generateChatCompletionprompt = (artists: string[]) => {
  let base = "\nArtist Names: ";
  artists.forEach(a => base += a);
  const prompt = "\nChoose music genre tags from the list that best describe the set of artists given."
  const constraint = "\nOutput must be: an array of string, contains only tags, up to 5 tags"
  return genreOptions + base + prompt + constraint;
}
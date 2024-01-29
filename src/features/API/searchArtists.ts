import { baseUrl, searchUrlSuffix } from "./apiConfig"

export const searchArtists = async (name: string) => {
  const res = await fetch(`${baseUrl}/artists/${searchUrlSuffix}${name}`)
  return res.json()
}
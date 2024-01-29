import { baseUrl, searchUrlSuffix } from "./apiConfig"

export const searchTracks = async (name: string) => {
  const res = await fetch(`${baseUrl}/tracks/${searchUrlSuffix}${name}`)
  return await res.json()
}
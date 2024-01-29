import { baseUrl, searchUrlSuffix } from "./apiConfig"

export const getTrackRecommendations = async (qs :string) => {
  const tempURL = "recommendations?"
  const res = await fetch(`${baseUrl}/${tempURL}${qs}`)
  return await res.json()
}
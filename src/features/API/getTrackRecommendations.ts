import { baseUrl, searchUrlSuffix } from "./apiConfig"

interface IReuiredSearchParams {
  limit : number;
  market : string;
  seed_artists : string[];
  seed_genres : string[];
  seed_tracks : string[];
}

interface IReuiredSearchParams {
  min_acousticness? : number;
  max_acousticness? : number;
  target_acousticness? : number;
  min_danceability? : number;
  max_danceability? : number;
  target_danceability? : number;
  min_duration_ms? : number;
  max_duration_ms? : number;
  target_duration_ms? : number;
  min_energy? : number;
  max_energy? : number;
  target_energy? : number;
}

export const getTrackRecommendations = async (qs :string) => {
  const tempURL = "recommendations?"
  const res = await fetch(`${baseUrl}/${tempURL}${qs}`)
  return await res.json()
}
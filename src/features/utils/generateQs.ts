import { IOptionalSearchParams } from "../types/IRecommendationParams";

export const generateQs = (tracks: string[], artists: string[], genres: string[], optionalParams: IOptionalSearchParams) => {
  const qsConnector: string = "%2C"
  const qs: Record<string, any> = {
    limit: optionalParams.limit ?? 10,
    market: "ES",
    seed_tracks: tracks.join(qsConnector),
    seed_artists: artists.join(qsConnector),
    seed_genres: genres.join(qsConnector),
    ...optionalParams
  }
  Object.keys(qs).forEach(key => qs[key] === undefined && delete qs[key])
  return Object.entries(qs).map(e => e[0] + "=" + e[1]).join("&")
}
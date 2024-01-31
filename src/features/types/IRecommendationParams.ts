import { ISearchResult } from "./ISearchResult";

export interface IRequiredSearchParams {
  seedTracks: ISearchResult[];
  seedArtists: ISearchResult[];
  seedGenres: string[];
}

export interface IOptionalSearchParams {
  limit?: number;
  // market: string;

  // min_tempo?: number;
  // max_tempo?: number;

  // min_key?: number; // Range: 0 - 11
  // max_key?: number; // Range: 0 - 11

  // min_acousticness?: number;
  // max_acousticness?: number;
  
  // min_danceability?: number;
  // max_danceability?: number;
  
  // min_duration_ms?: number;
  // max_duration_ms?: number;
  
  // min_energy?: number;
  // max_energy?: number;

  // min_instrumentalness?: number; // Range: 0 - 1
  // max_instrumentalness?: number; // Range: 0 - 1
  
  // min_popularity?: number; // Range: 0 - 100
  // max_popularity?: number; // Range: 0 - 100
  
  // min_speechiness?: number; // Range: 0 - 1
  // max_speechiness?: number; // Range: 0 - 1

  target_tempo?: number;
  target_key?: number; // Range: 0 - 11
  target_acousticness?: number; // Range: 0 - 1
  target_danceability?: number; // Range: 0 - 1
  target_duration_ms?: number;
  target_energy?: number; // Range: 0 - 1
  target_instrumentalness?: number; // Range: 0 - 1
  target_popularity?: number; // Range: 0 - 100
  target_speechiness?: number; // Range: 0 - 1
}

export interface IRecommendationParams {
  limit?: number; // Default: 20, Range: 1 - 100
  market: string; // An ISO 3166-1 alpha-2 country code

  seed_artists?: string; // Required if seed_genres and seed_tracks are not set
  seed_genres?: string; // Required if seed_artists and seed_tracks are not set
  seed_tracks?: string; // Required if seed_artists and seed_genres are not set

  // bpm
  min_tempo?: number;
  max_tempo?: number;
  target_tempo?: number;

  min_key?: number; // Range: 0 - 11
  max_key?: number; // Range: 0 - 11
  target_key?: number; // Range: 0 - 11

  min_acousticness?: number; // Range: 0 - 1
  max_acousticness?: number; // Range: 0 - 1
  target_acousticness?: number; // Range: 0 - 1

  min_danceability?: number; // Range: 0 - 1
  max_danceability?: number; // Range: 0 - 1
  target_danceability?: number; // Range: 0 - 1

  min_duration_ms?: number; // in ms
  max_duration_ms?: number;
  target_duration_ms?: number;

  min_energy?: number; // Range: 0 - 1
  max_energy?: number; // Range: 0 - 1
  target_energy?: number; // Range: 0 - 1

  min_instrumentalness?: number; // Range: 0 - 1
  max_instrumentalness?: number; // Range: 0 - 1
  target_instrumentalness?: number; // Range: 0 - 1

  min_popularity?: number; // Range: 0 - 100
  max_popularity?: number; // Range: 0 - 100
  target_popularity?: number; // Range: 0 - 100

  min_speechiness?: number; // Range: 0 - 1
  max_speechiness?: number; // Range: 0 - 1
  target_speechiness?: number; // Range: 0 - 1

  

  // min_liveness?: number; // Range: 0 - 1
  // max_liveness?: number; // Range: 0 - 1
  // target_liveness?: number; // Range: 0 - 1

  // min_loudness?: number; // Range: 0 - 1
  // max_loudness?: number; // Range: 0 - 1
  // target_loudness?: number; // Range: 0 - 1

  // min_mode?: number; // Range: 0 - 1
  // max_mode?: number; // Range: 0 - 1
  // target_mode?: number; // Range: 0 - 1


  // min_time_signature?: number; // Maximum value: 11
  // max_time_signature?: number;
  // target_time_signature?: number;

  // min_valence?: number; // Range: 0 - 1
  // max_valence?: number; // Range: 0 - 1
  // target_valence?: number; // Range: 0 - 1

}

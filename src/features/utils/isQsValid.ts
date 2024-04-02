export const isQsValid = (qs:string) => {
  const params = new URLSearchParams(qs);

  // Check if at least one of seed_genres, seed_artists, or seed_tracks has a non-empty value
  const seedGenres = params.get('seed_genres');
  const seedArtists = params.get('seed_artists');
  const seedTracks = params.get('seed_tracks');

  if (seedGenres && seedArtists && seedTracks)
    return seedGenres?.trim() !== '' && seedArtists?.trim() !== '' && seedTracks?.trim() !== '';
  else return false;
}
export interface ISearchResult {
  name: string;
  id: string;
  images: string[];
  genres?: string[];
  previewUrl?: string;
  artists?: ISearchResult[];
  album?: IAlbum;
}

export interface IAlbum {
  images: string[]
}
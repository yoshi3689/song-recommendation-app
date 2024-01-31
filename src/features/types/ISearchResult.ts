export interface ISearchResult {
  name: string;
  id: string;
  images: IImage[];
  genres?: string[];
  previewUrl?: string;
  artists?: ISearchResult[];
  album?: IAlbum;
}

export interface IAlbum {
  images: IImage[]
}

export interface IImage {
  url: string;
}
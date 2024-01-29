import { ISearchResult } from "./ISearchResult";
import { ISeedArtist } from "./ISeedArtist";

export interface ISeedTrack extends ISearchResult {
  previewUrl: string;
  artists: ISeedArtist[];
  album: IAlbum;
}

export interface IAlbum {
  images: string[]
}

// export interface IImage {
//   url: string
// }
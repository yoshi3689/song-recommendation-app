import { ISearchResult } from "./ISearchResult";

export interface ISeed {
  type: string;
}

export interface IRecommendation {
  seeds: ISeed[]
  tracks: ISearchResult[];
}
import { useSelector } from "react-redux"
import { selectQs } from "../../../features/slices/requiredSearchParamsSlice"
import { useGetRecommendationsQuery } from "../../../features/API/spotifyBasicApiSlice"
import { isQsValid } from "../../../features/utils/isQsValid"


export const useFetchRecommendations = () => {
  const qs = useSelector(selectQs)
  return useGetRecommendationsQuery(qs, { skip: qs === "" || !isQsValid(qs) })
}
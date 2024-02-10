import { invalidateProfileCache, useLazyLogoutQuery } from "../../../features/API/spotifyAdvancedApiSlice";
import { isDevelopment } from "../../../features/utils/isDevelopment";

export const useLogout = () => {
  const [trigger] = useLazyLogoutQuery();
  return async() => {
    try {
      // delete the access token in BE
      await trigger()

      // clear the profile data chache 
      invalidateProfileCache()

      // log user out from spotify
      const url = 'https://www.spotify.com/en/logout/'
      const spotifyLogoutWindow = window.open(url, "_blank")
      setTimeout(() => spotifyLogoutWindow?.close(), 2000)
      
      // refresh page 
      window.location.href = isDevelopment() ? process.env.REACT_APP_APP_DEV as string : process.env.REACT_APP_APP_PROD as string
    } catch (error) {
      console.error(error)
    }
  }
}
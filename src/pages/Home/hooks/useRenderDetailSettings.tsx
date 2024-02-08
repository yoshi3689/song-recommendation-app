import { useState } from "react";
import SingleSlider from "../../../components/Slider/SingleSlider";
import { durationUpdated, initialState, optionalSearchParamsUpdated } from "../../../features/slices/optionalSearchParamsSlice";

export const useRenderDetailSettings = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  const renderSliders = () => 
    Object.entries(initialState).map(([key, value]) => {
        switch (key) {
          case "limit":
            return <SingleSlider key={key} name={key} label={key} iniitalValue={value} min={value} max={50} step={10} update={optionalSearchParamsUpdated} />  
          case "target_duration_ms":
            return <SingleSlider key={key} name={key} label={key.replace("_ms", "(min)")} iniitalValue={value} min={0} max={10} step={0.5} update={durationUpdated}/>  
          case "target_key":
            return <SingleSlider key={key} name={key} label={key} iniitalValue={value} min={0} max={11} step={1} update={optionalSearchParamsUpdated}/>  
          case "target_tempo":
            return <SingleSlider key={key} name={key} label={key+"/BPM"} iniitalValue={value} min={60} max={180} step={5} update={optionalSearchParamsUpdated}/>  
          default:
            return <SingleSlider key={key} name={key} label={key} iniitalValue={value} min={10} max={100} step={5} update={optionalSearchParamsUpdated}/>  
        }
    }
    )
  return {open, setOpen, renderSliders}
}
import {WelcomeStep} from "../components/steps/WelcomeStep";
import React, {useState} from "react";
import {EnterNameStep} from "../components/steps/EnterNameStep";
import {TwitterStep} from "../components/steps/TwitterStep";
import {ChooseAvatarStep} from "../components/steps/ChooseAvatarStep";
import {EnterPhoneStep} from "../components/steps/EnterPhoneStep";
import {EnterCodeStep} from "../components/steps/EnterCodeStep";

const stepsComponents = {
    0: WelcomeStep,
    1: EnterNameStep,
    2: TwitterStep,
    3: ChooseAvatarStep,
    4: EnterPhoneStep,
    5: EnterCodeStep,

}
type MainContextProps ={
    onNextstep: ()=>void
    step:number
}

export const  MainContext = React.createContext<MainContextProps>({} as MainContextProps)

export default function Home() {
    const [step, setStep]= useState<number>(0   )
    const Step = stepsComponents[step]
    const onNextstep =()=>{
        setStep((prev)=>prev + 1)
    }
  return (
    <MainContext.Provider value={{step, onNextstep}}>
        <Step/>
    </MainContext.Provider>
  )
}

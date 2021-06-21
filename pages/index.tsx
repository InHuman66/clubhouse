import {WelcomeStep} from "../components/steps/WelcomeStep/index";
import React, {useState} from "react";
import {EnterNameStep} from "../components/steps/EnterNameStep/index";
import {TwitterStep} from "../components/steps/TwitterStep/index";
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


export default function Home() {
    const [step, setStep]= useState<number>(5   )
    const Step = stepsComponents[step]
  return (
    <div>
        <Step/>
    </div>
  )
}

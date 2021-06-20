import {WelcomeStep} from "../components/steps/WelcomeStep/index";
import React, {useState} from "react";
import {EnterNameStep} from "../components/steps/EnterNameStep/index";

const stepsComponents = {
    0: WelcomeStep,
    1: EnterNameStep,
}


export default function Home() {
    const [step, setStep]= useState<number>(0)
    const Step = stepsComponents[step]
  return (
    <div>
        <Step/>
    </div>
  )
}

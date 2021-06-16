import {WelcomeStep} from "../components/steps/WelcomeStep";
import React from "react";


export default function Home() {
  const  [step, setStep] = React.useState<number>(1);
  return (
    <div>
        <WelcomeStep/>
    </div>
  )
}

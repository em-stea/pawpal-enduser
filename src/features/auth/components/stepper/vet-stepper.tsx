"use client";

import {useStep} from "usehooks-ts";

import {Button} from "@/shared/components/button/button";
import {Progress, ProgressLabel} from "@/shared/components/progress/progress";

import VetForm from "../form/vet-form";

const STEPS = [
  {step: "Paso 1 de 2", title: "Datos Personales"},
  {step: "Paso 2 de 2", title: "Ejercicio Profesional"},
];

export const VetStepper = () => {
  const [currentStep, helpers] = useStep(STEPS.length);

  const {canGoToPrevStep, canGoToNextStep, goToNextStep, goToPrevStep, reset, setStep} = helpers;

  return (
    <>
      <Progress max={STEPS.length} value={currentStep}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-secondary-500" />
          <ProgressLabel>
            <span className="font-bold">{STEPS[currentStep - 1].step}</span>
            {": \u00A0\u00A0"}
            {STEPS[currentStep - 1].title}
          </ProgressLabel>
        </div>
      </Progress>

      <Button onClick={goToPrevStep}>Go to previous step</Button>
      <Button onClick={goToNextStep}>Go to next step</Button>

      {/* <VetForm canGoToNextStep={canGoToNextStep}/> */}
    </>
  );
};

"use client";

import {ArrowRightIcon} from "lucide-react";

import {useVetForm} from "@/features/auth/hooks/use-vet-form";
import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";

import {FirstStep} from "./first-step";
import {SecondStep} from "./second-step";

interface VetFormProps {
  currentStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isLastStep: boolean;
}

export default function VetForm({
  currentStep,
  goToNextStep,
  goToPrevStep,
  isLastStep,
}: VetFormProps) {
  const {form, handleNext, onSubmit} = useVetForm({
    currentStep,
    goToNextStep,
    goToPrevStep,
    isLastStep,
  });

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 py-10">
        {currentStep === 1 && <FirstStep />}

        {currentStep === 2 && <SecondStep />}

        <div className="mt-4 flex gap-2">
          {isLastStep ? (
            <div className="flex w-full flex-col gap-2">
              <Button className="gap-2" size="fullWidth" type="submit" variant="primary">
                Registrarme
                <ArrowRightIcon className="size-5" />
              </Button>
              <Button size="fullWidth" type="button" variant="secondary" onClick={goToPrevStep}>
                Atrás
              </Button>
            </div>
          ) : (
            <Button
              className="gap-2"
              size="fullWidth"
              type="button"
              variant="primary"
              onClick={() => void handleNext()}
            >
              Continuar con Registro Profesional
              <ArrowRightIcon className="size-5" />
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
}

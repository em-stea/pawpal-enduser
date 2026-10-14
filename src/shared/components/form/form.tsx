"use client";

import type {FieldValues, SubmitHandler, UseFormReturn} from "react-hook-form";

import {FormProvider} from "react-hook-form";

interface FormProps<T extends FieldValues> extends Omit<React.ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export function Form<T extends FieldValues>({form, onSubmit, children, ...props}: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={(event) => {
          void form.handleSubmit(onSubmit)(event);
        }}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

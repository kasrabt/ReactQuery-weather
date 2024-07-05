'use client'
import React from "react";
import InputCity from "./Input";
import SubmitButton from "./Button";
import { useForm, type SubmitHandler, FormProvider } from "react-hook-form";

type InputType = {
  City: string;
};

export default function FindCity() {
    const methods = useForm<InputType>()
  
  const onSubmit: SubmitHandler<InputType> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className=" flex w-1/4  flex-col gap-5 rounded-lg border border-gray-500 p-3 "
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <InputCity inputName="City" />
        <SubmitButton />
      </form>
    </FormProvider>
  );
}

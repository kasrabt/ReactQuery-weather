import React from "react";
import InputCity from "./Input";
import SubmitButton from "./Button";

export default function FindCity() {
  return (
    <form className=" flex gap-5 w-full flex-col"> 
      <InputCity />
      <SubmitButton />
    </form>
  );
}

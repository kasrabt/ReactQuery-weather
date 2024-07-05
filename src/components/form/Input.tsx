import { Input, Field, Label } from "@headlessui/react";
import React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
export default function InputCity({inputName} : { inputName : string}) {
  const { register } = useFormContext();
  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-600">City</Label>

      <Input
        {...register(inputName, { required: true })}
        className={clsx(
          "mt-3 block  w-full rounded-lg border-none bg-white bg-opacity-75  px-3 py-1.5 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25",
        )}
      />
    </Field>
  );
}

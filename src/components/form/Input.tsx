
import { Input  , Field , Label } from '@headlessui/react'
import React from 'react'
import clsx from 'clsx';
export default function InputCity() {
  return (
    <Field>
    <Label className="text-sm/6 font-medium text-white">City</Label>
   
    <Input
      className={clsx(
        'mt-3 bg-white  bg-opacity-75 block w-full rounded-lg border-none  py-1.5 px-3 text-sm/6 text-white',
        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
      )}
    />
  </Field>
  )
}

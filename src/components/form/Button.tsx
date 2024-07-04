


import { Button } from '@headlessui/react'
import React from 'react'

export default function SubmitButton () {
  return (
    <Button className="flex justify-center items-center p-3 gap-2 rounded-md bg-gray-700 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
    Save changes
  </Button>
  )
}

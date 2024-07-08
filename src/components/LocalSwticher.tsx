"use client";
import { Select } from "@headlessui/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { type ChangeEventHandler } from "react";

export default function LocalSwticher() {
  const t = useTranslations("Index");
  const router = useRouter();
  const locale = useLocale();
  const changeLangHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value: string = e.target.value;
   
    
    void router.replace(`/${value}`);
    
  };
  return (
    <Select value={locale} onChange={changeLangHandler} className='p-2 rounded-lg m-4'>
      <option value={"fa"}>{t("persian")} 🇮🇷</option>
      <option value={"en"}>{t("English")} 🇺🇸</option>
    </Select>
  );
}

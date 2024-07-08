/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 

const locales = ['en', 'fa'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as never)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
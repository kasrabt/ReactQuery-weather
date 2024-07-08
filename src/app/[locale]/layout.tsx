/* eslint-disable @typescript-eslint/no-unsafe-return */
import "~/styles/globals.css";

import Wallpaper from "~/components/Wallpaper";
import { NextIntlClientProvider } from "next-intl";
import ReactQueryClientProvider from "~/components/ReactQueryClientProvider";
import { type ChildrenProps } from "~/types/DataTypes";

import { getMessages } from "next-intl/server";
import LocalSwticher from "~/components/LocalSwticher";
import localfont from "next/font/local";
export const metadata = {
  title: "Weather app",
  description: "Created by Kasra",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const vazirFont = localfont({
  src: "../../fonts/Vazir-Medium.woff2",
});

interface paramsType {
  params: { locale: string };
}
interface Props extends ChildrenProps, paramsType {}

async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={vazirFont.className}
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      <body>
        <ReactQueryClientProvider>
          <Wallpaper />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LocalSwticher />
            {children}
          </NextIntlClientProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;

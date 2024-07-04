import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Wallpaper from "~/components/Wallpaper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <QueryClientProvider client={client}>
          <Wallpaper />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}

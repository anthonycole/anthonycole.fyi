import type React from "react"
import { metadata as siteMetadata } from "@/app/config/site";
import type { Metadata } from "next"
import { Provider } from "@/components/ui/provider";
import MainLayout from "@/components/layout/MainLayout";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <body className={dmSans.className}>
        <Provider>
          <MainLayout>
            {children}
          </MainLayout>
        </Provider>
      </body>
    </html>
  );
}
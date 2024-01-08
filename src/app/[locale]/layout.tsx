import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Dropdown from "../components/dropdown";
import {unstable_setRequestLocale} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My blog - Lucas",
  description: "My personal website",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className} >
        <NextIntlClientProvider locale={locale} messages={messages}>
        <main className=" bg-light bg-cover z-0">
        <header className=" mx-3 my-2 absolute right-0">
          <Dropdown/>
        </header>
          {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
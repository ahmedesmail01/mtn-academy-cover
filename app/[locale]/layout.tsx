// src/app/[locale]/layout.tsx

import Navbar from "../../components/layout/Navbar";
import { Providers } from "../Providers";

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch {
    return {};
  }
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params: paramsPromise,
}: LocaleLayoutProps) {
  // Await the params
  const params = await paramsPromise;
  const locale = params.locale;
  const messages = await getMessages(locale);

  return (
    <Providers messages={messages} locale={locale}>
      <Navbar />
      <div className={`${locale === "ar" ? "font-cairo" : "font-poppins"}`}>
        {children}
      </div>
    </Providers>
  );
}

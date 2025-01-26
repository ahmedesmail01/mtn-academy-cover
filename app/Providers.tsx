// src/app/providers.tsx
"use client";
import { NextIntlClientProvider } from "next-intl";
import type { AbstractIntlMessages } from "use-intl";
import { Toaster } from "sonner";

type Messages = Record<string, AbstractIntlMessages>;

type ProvidersProps = {
  children: React.ReactNode;
  locale: string;
  messages: Messages; // You can make this more specific based on your messages type
};

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <Toaster />
    </NextIntlClientProvider>
  );
}

"use client";
import { ReduxProvider, AntdProvider } from '@/providers';
export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <AntdProvider>{children}</AntdProvider>
    </ReduxProvider>
  ); // TODO: add other providers here
}

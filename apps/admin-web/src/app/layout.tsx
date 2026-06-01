import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KoraNow Admin',
  description: 'KoraNow moderation and city challenge management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

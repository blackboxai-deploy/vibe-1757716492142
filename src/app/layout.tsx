import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'O Código da Atração',
  description: 'O método passo a passo para despertar o desejo e a admiração nas mulheres mais interessantes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  );
}

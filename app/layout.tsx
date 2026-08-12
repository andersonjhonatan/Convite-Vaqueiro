import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Sertão de Miguel | Convite de Aniversário',
  description: 'Uma aventura pelo sertão para celebrar um dia especial.',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
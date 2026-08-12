import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'João Bento — 7 anos | Convite Vaqueiro',
  description: 'Convite infantil inspirado no sertão nordestino e na tradição do vaqueiro.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

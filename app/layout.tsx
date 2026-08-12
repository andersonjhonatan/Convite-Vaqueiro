import './globals.css';
import './overrides.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Cavalgada de Benício | Convite de Aniversário',
  description: 'Um convite infantil premium inspirado no sertão nordestino e na tradição do vaqueiro.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

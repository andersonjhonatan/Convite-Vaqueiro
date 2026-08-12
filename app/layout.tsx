import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Aventura do Pequeno Benício | Convite Infantil',
  description: 'Convite infantil interativo com pequeno vaqueiro, cavalo, fazenda e uma aventura no sertão.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

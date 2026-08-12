import './globals.css';
import './overrides.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Cavalgada do Pequeno Benício | Convite Infantil',
  description: 'Convite infantil interativo com tema de vaqueirinho nordestino, cavalgada e festa no sertão.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

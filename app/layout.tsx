import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAGI BOT — Discord Management',
  description: 'Premium Discord moderation, automation, welcome, tickets and server management.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Spatial Data Portfolio',
  description: 'Showcasing ArcGIS and Spatial Data Visualizations',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}>
      <body className="font-sans bg-zinc-950 text-zinc-50 min-h-screen selection:bg-teal-500/30 selection:text-teal-200" suppressHydrationWarning>{children}</body>
    </html>
  );
}

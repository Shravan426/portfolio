import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shravan Suresh | Software Developer Portfolio',
  description: 'Portfolio showcasing Shravan Suresh’s skills, projects, and experience as a software developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        
          <Header />
          <main>{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}
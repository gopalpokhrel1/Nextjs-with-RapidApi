

// RootLayout.js
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import './globals.css'; // Ensure this path is correct
import Navbar from '@/components/Navbar';

export let metadata = {
  title: 'Movie App',
  description: 'Generated by create next app',
  icon: '../../../public/logo.png'
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
      </Head>
      <body>
        <Navbar/>
        {children}
        
        </body>
    </html>
  );
}



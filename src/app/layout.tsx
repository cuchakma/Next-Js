import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Cupid Chakma",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <Head>
          <title>Cupid Chakma Portfolio</title>
          <meta name="description" content="Portfolio Website"/>
      </Head>
      <body className='__portfolio-body'>
        {children}
      </body>
    </html>
  );
}

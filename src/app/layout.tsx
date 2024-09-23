import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
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
    <html lang="en">
      <Head>
          <title>Cupid Chakma Portfolio</title>
          <meta name="description" content="Portfolio Website"/>
      </Head>
      <body className={`__portfolio-body ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}

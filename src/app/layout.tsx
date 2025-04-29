import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enlightenium",
  description: "Learn faster with this great product",
  keywords: ['project', 'nextjs', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* mobile metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        {/* site metas */}
        <title>Foste</title>
        <meta name="keywords" content="Enlightenium" />
        <meta name="description" content="Ask it. Learn it." />
        <meta name="author" content="" />
        {/* bootstrap css */}
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        {/* style css */}
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        {/* Responsive*/}
        <link rel="stylesheet" href="css/responsive.css" />
        {/* fevicon */}
        <link rel="icon" href="images/fevicon.png" type="image/gif" />
        {/* Scrollbar Custom CSS */}
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
        {/* Tweaks for older IEs*/}
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
        {/* owl stylesheets */}
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/script.js" defer></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

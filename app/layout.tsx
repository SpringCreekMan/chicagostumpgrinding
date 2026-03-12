import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Professional Stump Grinding & Tree Service`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Professional stump grinding, stump removal, tree service, and tree removal across Chicago and surrounding suburbs. Fast, affordable, fully insured. Request a free quote.",
  keywords: [
    "stump grinding Chicago",
    "stump removal Chicago",
    "tree service Chicago",
    "tree removal Chicago",
    "Chicago stump grinding",
    "DuPage County stump grinding",
    "Cook County tree service",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Professional Stump Grinding & Tree Service`,
    description:
      "Fast, professional stump grinding and tree service across Chicago and surrounding suburbs. Free quotes, same-week service.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Professional Stump Grinding & Tree Service`,
    description:
      "Fast, professional stump grinding and tree service across Chicago and surrounding suburbs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P1JJ7DL972" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P1JJ7DL972');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

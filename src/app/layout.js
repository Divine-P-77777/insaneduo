import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Insane Duo - Official",
  description: "Welcome to the Insane Duo website, showcasing achievements and talents.",
  icons: {
    icon: "/logo.png", // Sets favicon directly
  },
  openGraph: {
    title: "Insane Duo",
    description: "Check out our achievements and journey!",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "/logo.png", // Used when sharing on social media
        width: 800,
        height: 600,
        alt: "Insane Duo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insane Duo",
    description: "Check out our achievements and journey!",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* SEO Meta Tags */}
        <meta name="title" content="Insane Duo - Official" />
        <meta name="description" content="Welcome to the Insane Duo website, showcasing achievements and talents." />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://insaneduo.vercel.app/" />
        <meta property="og:title" content="Insane Duo" />
        <meta property="og:description" content="Check out our achievements and journey!" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Card for better preview on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insane Duo" />
        <meta name="twitter:description" content="Check out our achievements and journey!" />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}



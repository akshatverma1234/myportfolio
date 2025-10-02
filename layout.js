import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Portfolio - Akshat Verma | Full Stack Developer & Cybersecurity Enthusiast",
  description:
    "Welcome to Akshat Verma's portfolio. A Full Stack Developer and Cybersecurity Enthusiast skilled in React, Next.js, Node.js, and security-focused projects. Explore my work, projects, and achievements.",
  keywords: [
    "Akshat Verma",
    "Full Stack Developer",
    "Cybersecurity Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "MERN Developer",
    "Security Projects",
    "Web Development",
  ],
  authors: [{ name: "Akshat Verma" }],
  creator: "Akshat Verma",
  publisher: "Akshat Verma",
  metadataBase: new URL("https://your-portfolio-domain.com"), // replace with your domain
  openGraph: {
    title: "Akshat Verma | Full Stack Developer & Cybersecurity Enthusiast",
    description:
      "Explore Akshat Verma's portfolio – Full Stack projects, Cybersecurity initiatives, and professional achievements.",
    url: "https://your-portfolio-domain.com",
    siteName: "Akshat Verma Portfolio",
    images: [
      {
        url: "./og_image",
        width: 1200,
        height: 630,
        alt: "Akshat Verma Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Verma | Full Stack Developer & Cybersecurity Enthusiast",
    description:
      "Check out my portfolio showcasing Full Stack development and cybersecurity projects.",
    creator: "@AkshatV62764804",
    images: ["./og_image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-8 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

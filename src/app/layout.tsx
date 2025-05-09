import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Cao Minh Hoang | Software Engineer",
  description: "Backend-focused software engineer with expertise in .NET, Node.js, and cloud-native systems",
  keywords: ["Software Engineer", "Backend Developer", ".NET", "Node.js", "Cloud Native"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-gradient-to-b from-gray-900 to-black text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
} 
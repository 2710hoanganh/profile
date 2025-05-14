import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cao Minh Hoang | Software Engineer",
  description: "Backend-focused software engineer with expertise in .NET, Node.js, and cloud-native systems",
  keywords: ["Software Engineer", "Backend Developer", ".NET", "Node.js", "Cloud Native"],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-transparent text-[#6B4F3A] overflow-x-hidden relative`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
} 
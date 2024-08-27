import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Sphere",
  description: "Blog Sphere is a user-friendly platform for creating, sharing, and exploring diverse blog content. Ideal for both beginners and experienced writers, it offers customizable templates, multimedia integration, and community engagement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

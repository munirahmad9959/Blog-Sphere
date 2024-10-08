import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Sphere: Where Every Voice Finds Its Sphere",
  description: "Blog Sphere is a user-friendly platform for creating, sharing, and exploring diverse blog content. Ideal for both beginners and experienced writers, it offers customizable templates, multimedia integration, and community engagement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

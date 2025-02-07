import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foonda",
  description: "Your Personalized Gateway to Education and Careers ",
  applicationName: "Foonda",
  authors: [{ name: "Ayabulela Mahlathini" }],
  creator: "Ayabulela Mahlathini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-3">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>
                  Made with ❤️ by <a href="https://ayamash.tech">Aya Mash</a>
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

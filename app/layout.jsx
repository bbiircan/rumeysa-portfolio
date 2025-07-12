import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Rumeysa Bircan | Software Developer & Web Portfolio",
  description: "Welcome to Rumeysa Bircan's personal portfolio website. Explore her projects, development skills, and contact information.",
  keywords: "Rumeysa Bircan, software developer, web developer, frontend developer, backend developer, fullstack developer, portfolio, Next.js, react, JavaScript, c#, .net",
  author: "Rumeysa Bircan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}

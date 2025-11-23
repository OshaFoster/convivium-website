import { Nunito_Sans, Smooch_Sans } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  variable: "--font-body",
});

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smooch-sans",
});

export const metadata = {
  title: "Pachamama Convivium",
  description: "A gathering for music, spiritual teachings, fellowship, and conversation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${nunitoSans.variable} ${smoochSans.variable} antialiased bg-warm-tan h-full`}
      >
        <div className="min-h-screen max-w-[1800px] mx-auto bg-warm-cream shadow-2xl relative overflow-x-hidden">
          <Navigation />
          <div className="pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

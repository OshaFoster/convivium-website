import { Playfair_Display, Inter, Grey_Qo, Oooh_Baby } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const greyQo = Grey_Qo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-grey-qo",
});

const ooohBaby = Oooh_Baby({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oooh-baby",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Pachamama Convivium - Marie",
  description: "A gathering for music, spiritual teachings, fellowship, and conversation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${playfair.variable} ${greyQo.variable} ${ooohBaby.variable} ${inter.variable} antialiased bg-warm-tan h-full`}
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

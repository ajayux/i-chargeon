import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"], // Include necessary subsets (Bai Jamjuree supports Latin and Thai)
  weight: ["200", "300", "400", "500", "600", "700"], // Specify desired weights
  style: ["normal", "italic"], // Include styles if needed
  preload: true,
  display: "swap", // Ensures FOUT (Flash of Unstyled Text) over FOIT (Flash of Invisible Text)
  variable: "--font-bai-jamjuree", // CSS variable for flexibility
});

export const metadata = {
  title: "iChargeon",
  description:
    "Experience lightning-fast charging with our new fast-charging powerbanks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const outfit = Outfit({ subsets: ['latin']});

export const metadata = {
  title: "MediSched",
  description: "Effortless healthcare booking at your fingertips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >

        <div className="">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

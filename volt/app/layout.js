import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Volt Conexiones",
  description: "Soluciones Eléctricas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

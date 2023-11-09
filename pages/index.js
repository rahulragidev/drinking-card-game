import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card />
    </div>
  );
}

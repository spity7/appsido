import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appsido",
};

export default function Home() {
  return <HomeMain />;
}

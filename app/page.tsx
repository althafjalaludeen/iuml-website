import type { Metadata } from "next";
import { HomePage } from "@/src/components/home/HomePage";
import { site } from "@/src/data/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.metadata.description,
};

export default function Home() {
  return <HomePage />;
}

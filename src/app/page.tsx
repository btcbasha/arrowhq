import Cards from "@/components/Cards";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HerSection";
import InfiniteScrollBrand from "@/components/InfineScroll";
import MessageBanner from "@/components/MessageBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <InfiniteScrollBrand/>
    <Cards/>
    <CardSection/>
    <MessageBanner/>
    <Footer/>
    </>
  );
}

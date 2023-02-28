import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import TimeLine from "@/components/timeline";
import MainBody from "@/components/MainBody";

export default function Home() {
  return (
    <>
     <Hero />
     <MainBody />
    <TimeLine />
    </>
  );
}

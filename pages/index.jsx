import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen bg-[#202020] flex flex-col pt-8">
      <nav className="flex container mx-auto justify-between items-center">
        <Link href="/">
          <h1 className="grad-text text-3xl cursor-pointer">
            PROOF OF <br /> PERSONAL <br /> LOCATION
          </h1>
        </Link>
        <ul className="flex gap-16 text-2xl grad-text">
          <Link href="/" className="">
            HOME
          </Link>
          <Link href="/" className="">
            WHY POPL?
          </Link>
          <Link href="/" className="">
            FAQS
          </Link>
        </ul>
        <button className="py-2 px-8 grad-text text-xl font-bold">
          ENTER APP
        </button>
      </nav>
      <main className="container mx-auto h-screen flex flex-col justify-center text-center">
        <Image src="/maintitle.svg" alt="" width={300} height={300} />
      </main>
    </div>
  );
}

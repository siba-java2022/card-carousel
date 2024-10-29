import Image from "next/image";
import styles from "./page.module.css";
import MatchComponet from "./components/matchComponents";
import NewsCarousel from "./components/newsCarousel";

export default function Home() {
  return (
    <>
      <MatchComponet />
      <NewsCarousel />
    </>
  );
}

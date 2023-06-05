
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import PromoSection from "./components/PromoSection";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <PromoSection />
    </main>
  )
}

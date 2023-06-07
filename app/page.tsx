import Categories from "./components/Categories";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import PromoSection from "./components/PromoSection";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <PromoSection />
      {/* @ts-expect-error Async Server Component */}
      <PopularProducts />
    </main>
  )
}

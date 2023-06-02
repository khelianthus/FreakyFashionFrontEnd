import Categories from "./components/Categories";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Categories />
    </main>
  )
}

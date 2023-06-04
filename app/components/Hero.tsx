export default function Hero() {
    return (
      <div className="bg-white">
        <div className="relative bg-gray-900">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="https://placehold.co/400/B0DBF1/B0DBF1"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-purple-300 opacity-50" />
  
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Lorem ipsum dolor</h1>
            <p className="mt-4 text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis quam quibusdam odio doloribus laboriosam maxime aut earum culpa nemo.
            </p>
            <a
              href="#"
              className="mt-8 inline-block border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              LOREM IPSUM
            </a>
          </div>
        </div>
      </div>
    )
  }
  
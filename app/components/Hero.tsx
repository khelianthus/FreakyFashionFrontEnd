export default function Hero() {
    return (
        <div className="px-6 pt-36 pb-48">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://placehold.co/400/B0DBF1/B0DBF1"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h2 className="mb-5 text-6xl font-bold tracking-tight text-white">
            Lorem ipsum dolor
          </h2>
          <p className="mt-3 text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            laborum laboriosam, numquam vitae consequatur aut dolore
            perspiciatis corporis.
          </p>
          <a
            href="#"
            className="mt-10 block w-full border border-transparent bg-white px-7 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >LOREM IPSUM</a>
        </div>
      </div>
    )
  }
  
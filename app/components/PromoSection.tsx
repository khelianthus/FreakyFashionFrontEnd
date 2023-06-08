export default function PromoSection() {
    return (
      <div className="bg-white my-10">
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gradient-to-r from-purple-100 to-lime-100 lg:block" />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 2xl:max-w-screen-xl">
                <div className="mx-auto max-w-2xl py-24 lg:py-52 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      Lorem ipsum dolor sit amet
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, voluptate asperiores. Officia eligendi maxime temporibus.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block border border-transparent bg-gray-800 px-8 py-3 font-medium text-white hover:bg-gray-900"
                      >
                        LOREM IPSUM
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <img
                src="https://placehold.co/400/E6EFFF/FFFFFF?text=Kampanj"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
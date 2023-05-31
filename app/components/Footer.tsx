//Behöver anpassas till liten skärm

export default function Footer() {
    return (
      <footer className="bg-gradient-to-t from-purple-100 to-lime-100" aria-labelledby="footer-heading">
           <div className="bg-white">
              <div className="flex flex-col border-b border-gray-200 lg:border-0">
                <nav aria-label="Offers" className="order-last lg:order-first">
                  <div className="mx-auto max-w-7xl lg:px-8">
                    <ul role="list" className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                      <li className="flex flex-col">
                        <a href="#" className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                          </svg>
                          <p className="text-gray-900">Expressleverans</p>
                          <p className="text-gray-900">inom 48h</p>
                        </a>
                      </li>
                      <li className="flex flex-col">
                        <a href="#" className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                          <p className="text-gray-900">Nyheter</p>
                          <p className=" text-gray-900">varje dag</p>
                        </a>
                      </li>
                      <li className="flex flex-col">
                        <a href="#" className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                          </svg>
                          <p className="text-gray-900">Klimatkompenserad</p>
                          <p className="text-gray-900">frakt</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="bg-white py-4"></div>
              <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-14">
                  <div className="mb-10 xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                      <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                          <h3 className="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-8 decoration-double">
                            Mina sidor
                          </h3>
                          <ul role="list" className="mt-6 space-y-4">
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                          <h3 className="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-8 decoration-double">
                            Kundtjänst
                          </h3>
                          <ul role="list" className="mt-6 space-y-4">
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                          <h3 className="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-8 decoration-double">
                            Rubrik
                          </h3>
                          <ul role="list" className="mt-6 space-y-4">
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                          <h3 className="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-8 decoration-double">
                            Rubrik
                          </h3>
                          <ul role="list" className="mt-6 space-y-4">
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                                >Underrubrik</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 xl:mt-0">
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        Registrera dig till vårt nyhetsbrev
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
                        ipsum.
                      </p>
                      <form className="mt-6 sm:flex sm:max-w-md">
                        <label className="sr-only">Email address</label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          required
                          className="w-1/3 min-w-0 appearance-none border-0 bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                          placeholder="Registrera din e-postadress"/>
                        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                          <button
                            type="submit"
                            className="flex w-full items-center justify-center px-3 py-2 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 mr-2">
                            Registrera
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                  <div className="flex space-x-6 md:order-2">
                  </div>
                  <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                    &copy; 2023 Freaky Fashion
                  </p>
                </div>
            </div>
      </footer>
    )
  }
  
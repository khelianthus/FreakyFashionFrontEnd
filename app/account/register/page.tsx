import Link from "next/link";

export default function Register() {
    return (
      <>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 lg:grid-cols-3">
            <form className="px-4 pb-1 mb-10 lg:col-start-2 lg:row-start-1">
                <div className="mx-auto max-w-lg lg:max-w-none">
                    <h2 className="mt-12 text-2xl font-bold text-gray-900 sm:col-span-full text-center">
                        Registrera användare
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4"> 

                        <div className="sm:col-span-2">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Förnamn
                            </label>
                            <div className="mt-1">
                                <input
                                type="email"
                                id="email-address"
                                name="email-address"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Efternamn
                            </label>
                            <div className="mt-1">
                                <input
                                type="email"
                                id="email-address"
                                name="email-address"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email adress
                            </label>
                            <div className="mt-1">
                                <input
                                type="email"
                                id="email-address"
                                name="email-address"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>          

                    <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">                

                        <div className="sm:col-span-3">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Adress
                            </label>
                            <div className="mt-1">
                                <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                Stad
                            </label>
                            <div className="mt-1">
                                <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                Region
                            </label>
                            <div className="mt-1">
                                <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                Postnummer
                            </label>
                            <div className="mt-1">
                                <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-200 focus:ring-lime-200 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-6 mt-6 sm:px-8">
                    <Link href="/account/login" className="text-sm font-semibold leading-6 text-gray-900">
                        Avbryt
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-lime-100 hover:bg-lime-200 px-3 py-2 text-sm font-semibold shadow-sm"
                        >
                        Spara
                    </button>
                </div>
            </form>
        </div>
      </>
    )
  }
  
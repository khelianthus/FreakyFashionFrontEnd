import Link from 'next/link';
import getCategories from '../api/getCategories';

export default async function Categories() {
    
  const categoriesData: Promise<Category[]> = getCategories()

    const categories = (await categoriesData)
    .slice(0, 6) 

    const content = (
    <div className="bg-white">
      <div className="py-10 sm:py-10 mx-auto max-w-screen-lg lg:px-4 2xl:max-w-screen-xl">
        <div className="relative mt-5">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-x-3 lg:space-x-0"
            >
              {categories.map((category) => (
                <li key={category.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200">
                      <img
                        src="https://placehold.co/400/E6EFFF/FFFFFF?text=Kategori"
                        alt=""
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="mt-1 font-medium text-sm text-gray-900 uppercase">
                        <Link href={`/categories/${category.urlSlug}`}>
                          <span className="absolute inset-0"/>
                          {category.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
     )

    return content;

}
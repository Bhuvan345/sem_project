import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="z-50 relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <>
                    <div className="flex -space-x-2 overflow-hidden">
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </div>
                  </>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

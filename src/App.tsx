import React, { useState } from 'react'
import logo from './assets/images/logo.png'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = [
    { name: 'Início', href: '#' },
    { name: 'Nosso Serviço', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Mentoria', href: '#mentoria' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <div className="bg-background min-h-screen">
      <header>
        <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-16 sm:h-24"
                alt="ProRadio Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-200 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
              } w-full overflow-hidden transition-all duration-500 ease-in-out lg:flex lg:max-h-full lg:w-auto`}
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-primary lg:hover:text-primary block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default App

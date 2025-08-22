import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full h-20 border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="w-32 h-8 border border-gray-300"></div>
          <nav className="flex space-x-8">
            <div className="w-20 h-6 border border-gray-300"></div>
            <div className="w-20 h-6 border border-gray-300"></div>
            <div className="w-20 h-6 border border-gray-300"></div>
            <div className="w-20 h-6 border border-gray-300"></div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-96 h-16 border border-gray-300 mb-6"></div>
            <div className="w-80 h-8 border border-gray-300 mb-8"></div>
            <div className="w-48 h-12 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="w-full h-screen border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-80 h-12 border border-gray-300 mb-8"></div>
            <div className="w-96 h-32 border border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-32 border border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-64 h-8 border border-gray-300 mb-4"></div>
            <div className="w-48 h-6 border border-gray-300"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

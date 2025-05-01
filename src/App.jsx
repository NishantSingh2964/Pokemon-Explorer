import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { PokemonProvider } from './contexts/PokemonContext';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritesPage from './pages/FavoritesPage';
import CompareTool from './components/CompareTool';
import RandomButton from './components/RandomButton';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // For toggling the nav menu

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <ErrorBoundary>
      <FavoritesProvider> {/* Wrap with FavoritesProvider */}
        <PokemonProvider>
          <Router>
            <div className="min-h-screen bg-gray-100">
              {/* Header */}
              <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
                {/* Left side: App title */}
                <h1 className="text-2xl font-bold">
                  <Link to="/">Pokémon Explorer</Link>
                </h1>

                {/* Right side: Hamburger icon for mobile */}
                <button
                  className="sm:hidden text-white text-2xl" // Visible only on small screens
                  onClick={toggleNav}
                >
                  &#9776; {/* Hamburger icon */}
                </button>

                {/* Navigation for larger screens */}
                <nav className="hidden sm:flex space-x-6 mx-auto"> {/* Visible on screens >= 640px */}
                  <Link 
                    to="/" 
                    className="text-lg font-semibold text-white hover:text-yellow-300 hover:underline transition-all duration-300"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/favorites" 
                    className="text-lg font-semibold text-white hover:text-yellow-300 hover:underline transition-all duration-300"
                  >
                    Favorites
                  </Link>
                  <Link 
                    to="/compare" 
                    className="text-lg font-semibold text-white hover:text-yellow-300 hover:underline transition-all duration-300"
                  >
                    Compare
                  </Link>
                </nav>

                {/* Random Button (visible only on large screens) */}
                <div className="hidden md:block ml-4"> {/* Visible only on large screens */}
                  <RandomButton /> {/* Visible only on larger screens */}
                </div>
              </header>

              {/* Side Navigation for mobile */}
              {isNavOpen && (
                <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
                  <div className="flex justify-end p-4">
                    <button
                      onClick={toggleNav}
                      className="text-white text-3xl"
                    >
                      &times; {/* Close button */}
                    </button>
                  </div>
                  <div className="flex flex-col items-center bg-blue-500 p-6">
                    <Link
                      to="/"
                      onClick={toggleNav}
                      className="text-lg font-semibold text-white py-2"
                    >
                      Home
                    </Link>
                    <Link
                      to="/favorites"
                      onClick={toggleNav}
                      className="text-lg font-semibold text-white py-2"
                    >
                      Favorites
                    </Link>
                    <Link
                      to="/compare"
                      onClick={toggleNav}
                      className="text-lg font-semibold text-white py-2"
                    >
                      Compare
                    </Link>
                  </div>
                </div>
              )}

              {/* Routes */}
              <main className="p-4 max-w-6xl mx-auto">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/pokemon/:id" element={<DetailPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/compare" element={<CompareTool />} />
                </Routes>
              </main>
            </div>
          </Router>
        </PokemonProvider>
      </FavoritesProvider>
    </ErrorBoundary>
  );
}

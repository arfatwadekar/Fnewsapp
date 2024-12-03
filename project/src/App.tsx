import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { NewsGrid } from './components/NewsGrid';
import { useNews } from './hooks/useNews';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

function App() {
  const { news, loading, error, searchTerm, setSearchTerm, refreshNews } = useNews();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex-1">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
            <button
              onClick={refreshNews}
              disabled={loading}
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh News
            </button>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
              <p className="text-gray-600">Loading latest news...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64 text-red-600">
              <AlertCircle size={48} className="mb-4" />
              <p className="text-lg text-center max-w-md">{error}</p>
              <button
                onClick={refreshNews}
                className="mt-6 px-6 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200 font-medium"
              >
                Try again
              </button>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No articles found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                Clear search
              </button>
            </div>
          ) : (
            <NewsGrid news={news} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
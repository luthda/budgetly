import { Outlet, Link } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Toaster } from "@/components/ui/toaster";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Budget Tracker</h1>
              <div className="space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <div className="container mx-auto px-4 py-8">
            <Outlet />
            <Toaster />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;

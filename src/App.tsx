import React, { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // If authenticated and on landing/auth, go to dashboard
  React.useEffect(() => {
    if (isAuthenticated && (currentPage === 'landing' || currentPage === 'auth')) {
      setCurrentPage('dashboard');
    }
  }, [isAuthenticated]);

  const renderPage = () => {
    if (currentPage === 'dashboard' && isAuthenticated) {
      return <Dashboard onLogout={() => {
        setIsAuthenticated(false);
        setCurrentPage('landing');
      }} />;
    }

    if (currentPage === 'auth') {
      return (
        <Auth 
          onBack={() => setCurrentPage('landing')} 
          onSuccess={() => setIsAuthenticated(true)}
        />
      );
    }

    return (
      <>
        <Navbar 
          currentPage={currentPage} 
          onNavigate={(page) => setCurrentPage(page)} 
        />
        <LandingPage onStart={() => setCurrentPage('auth')} />
      </>
    );
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased selection:bg-primary/10 selection:text-primary">
      {renderPage()}
      <Toaster position="top-right" expand={true} richColors />
    </div>
  );
};

export default App;
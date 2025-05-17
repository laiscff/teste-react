
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence, motion } from 'framer-motion';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
const PrototypesPage = lazy(() => import('@/pages/PrototypesPage'));
const TeamPage = lazy(() => import('@/pages/TeamPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

const PageLoader = () => (
  <div className="flex justify-center items-center h-screen bg-background">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
    />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/prototypes" element={<PrototypesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
        </Suspense>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
  
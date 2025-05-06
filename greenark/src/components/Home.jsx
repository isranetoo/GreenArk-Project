import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import Solution from './Solution';
import Benefits from './Benefits';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-screen relative flex items-center justify-center bg-gray-900">
          <div className="absolute inset-0 bg-black/50" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-white text-center"
          >
            <h1 className="text-6xl font-bold mb-4">
              Energia limpa, rios vivos
            </h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Juntos por um futuro sustentável
            </p>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Nossas Soluções
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Add feature cards here */}
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="carousel-section py-8">
          <Carousel />
        </section>

        {/* Solution Section */}
        <section className="solution-section py-8 bg-gray-100">
          <Solution />
        </section>

        {/* Benefits Section */}
        <section className="benefits-section py-8">
          <Benefits />
        </section>

        {/* Contact Section */}
        <section className="contact-section py-8 bg-gray-100">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
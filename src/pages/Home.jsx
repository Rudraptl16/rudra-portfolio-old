import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rudra Patel | Full-Stack & Mobile App Developer</title>
        <meta name="description" content="Rudra Patel is a Full-Stack and Mobile App Developer specializing in React, Node.js, and Flutter. Available for freelance work." />
        <meta name="keywords" content="Rudra Patel, Full-Stack Developer, Mobile App Developer, React, Flutter, Node.js" />
        <meta property="og:title" content="Rudra Patel | Developer Portfolio" />
        <meta property="og:description" content="Full-Stack & Mobile App Developer Portfolio" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://patelrudra.in/" />
      </Helmet>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </>
  );
}

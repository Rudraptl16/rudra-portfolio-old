import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 min-h-[70vh] flex flex-col items-center justify-center">
      <Helmet>
        <title>Blog | Rudra Patel</title>
      </Helmet>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Developer <span className="text-gradient">Blog</span>
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Insights, tutorials, and thoughts on web development, mobile apps, and the tech industry.
      </p>
      
      <div className="p-10 border border-light-border dark:border-dark-border rounded-2xl bg-light-surface dark:bg-dark-surface text-center">
        <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
        <p className="text-light-textMuted dark:text-dark-textMuted">
          I'm currently working on some exciting content. Check back later!
        </p>
      </div>
    </div>
  );
}

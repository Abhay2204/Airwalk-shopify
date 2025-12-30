import React from 'react';

export const CardSkeleton = () => (
  <div className="glass-panel rounded-3xl p-4 w-full h-[400px] flex flex-col gap-4 animate-pulse">
    <div className="w-full h-64 bg-shopily-cream/30 rounded-2xl"></div>
    <div className="h-6 w-3/4 bg-shopily-slate/20 rounded-full"></div>
    <div className="h-4 w-1/2 bg-shopily-slate/10 rounded-full"></div>
    <div className="mt-auto flex justify-between items-center">
      <div className="h-8 w-20 bg-shopily-slate/20 rounded-full"></div>
      <div className="h-10 w-10 bg-shopily-burgundy/20 rounded-full"></div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="w-full h-[80vh] flex flex-col md:flex-row gap-8 p-8 max-w-7xl mx-auto">
    <div className="flex-1 flex flex-col justify-center space-y-6">
      <div className="h-24 w-3/4 bg-shopily-charcoal/10 rounded-3xl animate-pulse"></div>
      <div className="h-24 w-1/2 bg-shopily-charcoal/10 rounded-3xl animate-pulse delay-100"></div>
      <div className="h-12 w-40 bg-shopily-burgundy/20 rounded-full animate-pulse delay-200"></div>
    </div>
    <div className="flex-1 rounded-[3rem] bg-shopily-cream/20 animate-pulse glass-panel"></div>
  </div>
);

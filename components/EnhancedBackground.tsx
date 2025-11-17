'use client';

import { ReactNode } from 'react';

interface EnhancedBackgroundProps {
  children: ReactNode;
  variant?: 'gradient' | 'dots' | 'grid' | 'mesh';
  overlay?: boolean;
}

export default function EnhancedBackground({
  children,
  variant = 'gradient',
  overlay = true
}: EnhancedBackgroundProps) {
  return (
    <div className="relative">
      {/* Background Pattern */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      )}

      {variant === 'dots' && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      )}

      {variant === 'grid' && (
        <div className="absolute inset-0 grid-background opacity-30" />
      )}

      {variant === 'mesh' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </div>
      )}

      {/* Animated Gradient Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-shimmer" />
      )}

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

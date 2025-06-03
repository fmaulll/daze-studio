'use client';

import { useEffect } from 'react';

interface AdProps {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
  format?: string;
  layout?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function Advertisement({ slot, style, className, format = 'auto', layout }: AdProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`advertisement-container ${className || ''}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style
        }}
        data-ad-client="ca-pub-2558078406235032"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        data-ad-layout={layout}
      />
    </div>
  );
} 
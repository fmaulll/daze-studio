'use client';

import { useEffect, useState } from 'react';
import Advertisement from './Advertisement';

interface InterstitialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export default function InterstitialModal({ isOpen, onClose, onComplete }: InterstitialModalProps) {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(5); // Reset timer when modal closes
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold mb-2">Your download is preparing...</h2>
          <p className="text-gray-600">Please wait {timeLeft} seconds while we prepare your screenshot.</p>
        </div>
        
        {/* AdSense Interstitial Ad */}
        <Advertisement 
          slot="7438105883"
          format="auto"
          className="my-4"
          style={{ 
            display: 'block',
            minHeight: '400px',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto'
          }}
        />

        <div className="text-center mt-4">
          <button
            disabled={timeLeft > 0}
            onClick={onComplete}
            className={`px-4 py-2 rounded ${
              timeLeft > 0 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-[#9500ff] hover:bg-[#7a00d3] text-white'
            }`}
          >
            {timeLeft > 0 ? `Wait ${timeLeft}s` : 'Download Now'}
          </button>
        </div>
      </div>
    </div>
  );
} 
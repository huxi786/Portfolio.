import { useState, useEffect } from 'react';

// Global mute state to persist across component renders
let isMutedGlobal = false;

export const setGlobalMute = (muted) => {
  isMutedGlobal = muted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('portfolio_muted', JSON.stringify(muted));
  }
};

export const getGlobalMute = () => {
  if (typeof window !== 'undefined' && isMutedGlobal === false) {
    const stored = localStorage.getItem('portfolio_muted');
    if (stored !== null) {
      isMutedGlobal = JSON.parse(stored);
    }
  }
  return isMutedGlobal;
};

export const useSoundEffects = () => {
  const [muted, setMuted] = useState(getGlobalMute());

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    setGlobalMute(newMuted);
  };

  const playSynthSound = (frequency, type, duration, volume) => {
    if (getGlobalMute()) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();
      
      // Auto-unlock AudioContext if it is suspended (browser user interaction policy)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = type || 'sine';
      oscillator.frequency.value = frequency;

      gainNode.gain.setValueAtTime(volume || 0.1, audioCtx.currentTime);
      // Clean exponential decay to prevent clicks or popping sounds
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('AudioContext failed to play sound:', e);
    }
  };

  // Clean pop/click sound for buttons
  const playClick = () => {
    playSynthSound(450, 'sine', 0.08, 0.2);
  };

  // Soft high beep for element hover
  const playHover = () => {
    playSynthSound(900, 'sine', 0.03, 0.04);
  };

  return { playClick, playHover, muted, toggleMute };
};

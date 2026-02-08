export const CLICK_SOUND_BASE64 = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'; // Placeholder short beep

import useSound from 'use-sound';

export const useSoundEffects = () => {
  const [playClick] = useSound(CLICK_SOUND_BASE64, { volume: 0.5 });
  const [playHover] = useSound(CLICK_SOUND_BASE64, { volume: 0.1, playbackRate: 2 }); // Higher pitch for hover

  return { playClick, playHover };
};

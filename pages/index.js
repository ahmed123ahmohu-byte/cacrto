import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import IntroScreen from '@/components/IntroScreen';
import LoginScreen from '@/components/LoginScreen';
import ChatInterface from '@/components/ChatInterface';
import { useNexaStore } from '@/hooks/useNexaStore';

export default function Home() {
  const store = useNexaStore();
  const { stage, finishIntro, login, loadSavedState } = store;

  useEffect(() => {
    loadSavedState();
  }, [loadSavedState]);

  return (
    <AnimatePresence mode="wait">
      {stage === 'intro' && <IntroScreen onStart={finishIntro} />}
      {stage === 'login' && <LoginScreen onLogin={login} />}
      {stage === 'chat' && <ChatInterface store={store} />}
    </AnimatePresence>
  );
}

import { create } from 'zustand';

const seedGreeting = (name) => ({
  id: crypto.randomUUID(),
  role: 'assistant',
  content: `أهلاً يا ${name} 👋\nمستعد نبدأ ونبني المستقبل؟`
});

export const useNexaStore = create((set) => ({
  name: '',
  stage: 'intro',
  theme: 'dark',
  messages: [],
  typing: false,
  previewCode: null,
  loadSavedState: () => {
    if (typeof window === 'undefined') return;
    const name = localStorage.getItem('nexa_name');
    const savedMessages = localStorage.getItem('nexa_messages');
    if (name) {
      set({ name, stage: 'chat' });
      if (savedMessages) {
        set({ messages: JSON.parse(savedMessages) });
      } else {
        set({ messages: [seedGreeting(name)] });
      }
    }
  },
  finishIntro: () => set({ stage: 'login' }),
  login: (name) => {
    localStorage.setItem('nexa_name', name);
    const messages = [seedGreeting(name)];
    localStorage.setItem('nexa_messages', JSON.stringify(messages));
    set({ name, stage: 'chat', messages });
  },
  addMessage: (msg) =>
    set((state) => {
      const messages = [...state.messages, msg];
      localStorage.setItem('nexa_messages', JSON.stringify(messages));
      return { messages };
    }),
  setTyping: (typing) => set({ typing }),
  setPreviewCode: (previewCode) => set({ previewCode }),
  clearChat: () =>
    set((state) => {
      const messages = [seedGreeting(state.name)];
      localStorage.setItem('nexa_messages', JSON.stringify(messages));
      return { messages, previewCode: null };
    }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
}));

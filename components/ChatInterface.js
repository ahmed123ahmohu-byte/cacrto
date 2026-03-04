import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { getMockNexaReply } from '@/lib/nexaBrain';
import { detectCodeBlock } from '@/utils/codeUtils';
import TypingIndicator from '@/components/TypingIndicator';
import PreviewPane from '@/components/PreviewPane';

export default function ChatInterface({ store }) {
  const { messages, addMessage, typing, setTyping, name, clearChat, previewCode, setPreviewCode, theme, toggleTheme } = store;
  const [draft, setDraft] = useState('');
  const [mobileTab, setMobileTab] = useState('chat');

  const hasPreview = useMemo(() => Boolean(previewCode), [previewCode]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const content = draft.trim();
    if (!content) return;

    addMessage({ id: crypto.randomUUID(), role: 'user', content });
    setDraft('');
    setTyping(true);

    setTimeout(() => {
      const reply = getMockNexaReply(content, name);
      const assistantMessage = { id: crypto.randomUUID(), role: 'assistant', content: reply };
      addMessage(assistantMessage);

      const detected = detectCodeBlock(reply);
      if (detected) {
        setPreviewCode(detected);
      }
      setTyping(false);
    }, 900);
  };

  return (
    <div className={`${theme === 'light' ? 'bg-slate-100 text-slate-900' : ''} min-h-screen p-4 md:p-6`}>
      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-between gap-3">
        <h1 className="arabic text-xl font-bold md:text-2xl">Nexa • صديقك الذكي للمستقبل</h1>
        <div className="flex gap-2">
          <button onClick={toggleTheme} className="glass rounded-xl px-4 py-2 text-sm">{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>
          <button onClick={clearChat} className="glass rounded-xl px-4 py-2 text-sm">🧹 Clear</button>
        </div>
      </div>

      {hasPreview && (
        <div className="mb-3 flex gap-2 md:hidden">
          <button onClick={() => setMobileTab('chat')} className="glass rounded-xl px-3 py-2 text-sm">Chat</button>
          <button onClick={() => setMobileTab('preview')} className="glass rounded-xl px-3 py-2 text-sm">Preview</button>
        </div>
      )}

      <div className={`mx-auto grid max-w-7xl gap-4 ${hasPreview ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        {hasPreview && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`${mobileTab === 'preview' ? 'block' : 'hidden'} md:block`}>
            <PreviewPane previewCode={previewCode} />
          </motion.div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${mobileTab === 'chat' ? 'block' : 'hidden'} glass flex min-h-[70vh] flex-col rounded-3xl p-4 md:block`}
        >
          <div className="mb-4 flex-1 space-y-3 overflow-y-auto pr-1">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 ${msg.role === 'assistant' ? 'bg-white/10' : 'ml-auto bg-gradient-to-r from-nexaBlue/80 to-nexaPurple/80'}`}
              >
                {msg.content}
              </motion.div>
            ))}
            {typing && <TypingIndicator />}
          </div>

          <form onSubmit={sendMessage} className="mt-2 flex gap-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="اسأل Nexa عن أي فكرة أو كود..."
              className="arabic w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 outline-none ring-nexaBlue transition focus:ring"
            />
            <button className="rounded-2xl bg-gradient-to-r from-nexaBlue to-nexaPurple px-5 py-3 font-semibold">إرسال</button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    onLogin(cleanName);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0)' }}
      className="flex min-h-screen items-center justify-center px-5"
    >
      <form onSubmit={submit} className="glass w-full max-w-md rounded-[28px] p-8">
        <h2 className="arabic mb-6 text-center text-3xl font-bold">مرحباً بك في Nexa</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اكتب اسمك"
          className="arabic w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 outline-none ring-nexaBlue transition focus:ring"
        />
        <button
          type="submit"
          className="arabic mt-4 w-full rounded-2xl bg-gradient-to-r from-nexaBlue to-nexaPurple px-4 py-3 font-bold"
        >
          دخول
        </button>
      </form>
    </motion.div>
  );
}

export const getMockNexaReply = (prompt, name) => {
  const lower = prompt.toLowerCase();

  if (lower.includes('html') || lower.includes('landing')) {
    return `أكيد يا ${name}! خلّيني أجهز لك نسخة سريعة ✨\n\n\`\`\`html\n<section style="padding:32px;background:linear-gradient(130deg,#1a1f43,#0d0f20);color:white;border-radius:20px">\n  <h1>Nexa Future Landing</h1>\n  <p>مرحبا بك في تجربة مستقبلية.</p>\n  <button style="padding:12px 18px;border-radius:12px;background:#3fa9ff;border:none;color:white">ابدأ الآن</button>\n</section>\n\`\`\`\n\nإذا تحب أحولها إلى React component جاهز للإنتاج. 🚀`;
  }

  if (lower.includes('react')) {
    return `حلو! هذا مكون React نظيف مع لمسة مستقبلية:\n\n\`\`\`jsx\nexport default function Hero(){\n  return (\n    <section className=\"rounded-3xl p-10 bg-gradient-to-br from-[#1a1f43] to-[#0b0d1b] text-white\">\n      <h1 className=\"text-4xl font-bold\">Nexa</h1>\n      <p className=\"mt-4 text-blue-100\">صديقك الذكي لبناء المستقبل.</p>\n    </section>\n  )\n}\n\`\`\`\n\nأفضل ممارسة: افصل typography/theme في design tokens.`;
  }

  return `فهمت عليك يا ${name} 🤝\nنقدر نبنيها بأفضل شكل خطوة بخطوة:\n1) نحدد الهدف بدقة\n2) نكتب بنية نظيفة\n3) نختبر الأداء والـ UX\n\nأرسل لي تفاصيل أكثر (تقنية أو تصميمية) وأنا أعطيك حل optimized مباشرة.`;
};

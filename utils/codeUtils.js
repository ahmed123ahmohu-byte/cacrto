export const detectCodeBlock = (content) => {
  const match = content.match(/```(html|css|javascript|js|react|jsx|python)?\n([\s\S]*?)```/i);
  if (!match) return null;

  return {
    language: (match[1] || 'html').toLowerCase(),
    code: match[2]
  };
};

export const buildPreviewDocument = ({ language, code }) => {
  if (language === 'html') return code;
  if (language === 'css') {
    return `<style>${code}</style><div class='box'>Nexa CSS Preview</div>`;
  }
  if (language === 'javascript' || language === 'js') {
    return `<div id='app'>Nexa JS Preview</div><script>${code}</script>`;
  }
  if (language === 'react' || language === 'jsx') {
    return `<div style="padding: 24px; font-family: Inter, sans-serif; color: #111">React preview يحتاج bundler. هذا عرض نصي فقط:<pre>${code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')}</pre></div>`;
  }
  if (language === 'python') {
    return `<div style="padding:24px;color:#111;font-family:monospace;white-space:pre-wrap">Python preview\n${code}</div>`;
  }

  return `<pre>${code}</pre>`;
};

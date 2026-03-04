export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, name = 'صديقي' } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // Placeholder for OpenAI API integration. Keep a stable fallback for local/dev usage.
  return res.status(200).json({
    reply: `أكيد يا ${name}! هذا endpoint جاهز للربط مع OpenAI API. ضع المفتاح في OPENAI_API_KEY ووسّع المنطق حسب احتياجك.`
  });
}

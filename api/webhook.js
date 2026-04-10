export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'alive' });
  }

  return res.status(200).json({ status: 'ok' });
}

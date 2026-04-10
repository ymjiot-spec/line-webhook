export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'alive' });
  }

  try {
    await fetch('https://script.google.com/macros/s/AKfycbxxk0TqfVPBtbTa0lJ6BLeS437Ss2pBwc7REtSoNDBi4LxKZ3hgbuFC6Zm31QWY71_Avg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return res.status(200).json({ status: 'error' });
  }
}

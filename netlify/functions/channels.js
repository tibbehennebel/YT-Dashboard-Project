const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

const { DB_URL, DB_KEY } = process.env;

exports.handler = async (event) => {
  const method = event.httpMethod;

  if (method === 'GET') {
    const res = await fetch(`${DB_URL}/channels`, {
      headers: { 'apikey': DB_KEY }
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }

  if (method === 'POST') {
    const body = JSON.parse(event.body || '{}');
    const res = await fetch(`${DB_URL}/channels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': DB_KEY
      },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }

  return { statusCode: 405, body: 'Method not allowed' };
};

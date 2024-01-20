const CORS_ANYWHERE_URL = 'http://localhost:8080/'; //

const BASE_URL = 'https://test.api.amadeus.com/v2';
const URL = `${BASE_URL}/shopping/flight-offers?originLocationCode=FRA&destinationLocationCode=NYC&departureDate=2024-02-10&adults=1&currencyCode=RUB&max=15`;

const CLIENT_ID = process.env.REACT_APP_API_KEY;
const CLIENT_SECRET = process.env.REACT_APP_API_SECRET;
let token = null;

async function fetchToken() {
  const res = await fetch(
    `${CORS_ANYWHERE_URL}https://test.api.amadeus.com/v1/security/oauth2/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
      body: 'grant_type=client_credentials',
    }
  );

  return await res.json();
}

export async function fetchTickets() {
  try {
    if (!token) {
      const { access_token } = await fetchToken();
      token = access_token;
    }

    const res = await fetch(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const json = await res.json();

    return json.data;
  } catch (error) {
    alert('Something went wrong, please reload the page')

    return [];
  }
}

const CORS_ANYWHERE_URL = 'http://localhost:8080/'; //


const BASE_URL = 'https://test.api.amadeus.com/v2';
const URL = `${BASE_URL}/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-02-10&adults=1&max=30`;

const CLIENT_ID = process.env.REACT_APP_API_KEY;
const CLIENT_SECRET = process.env.REACT_APP_API_SECRET;

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
  const { access_token } = await fetchToken();
  console.log(access_token);

  const res = await fetch(URL, {
    headers: { 'Authorization': `Bearer ${access_token}` },
  });

  return await res.json();
}

fetchTickets().then((res) => console.log(res)).catch(err => console.log(err));

// const API_TOKEN = process.env.REACT_APP_API_TOKEN;
// const BASE_URL = 'https://api.travelpayouts.com/v2/';
// const URL = `${BASE_URL}prices/month-matrix?show_to_affiliates=true&origin=LED&destination=HKT`

// export async function fetchTickets() {
//   const res = await fetch(`${CORS_ANYWHERE_URL}${URL}`, {
//     headers: {
//       'Accept-Encoding': ['gzip', 'deflate'],
//       'x-access-token': API_TOKEN,
//     },
//   });
//   return await res.json();
// }

// fetchTickets().then((res) => console.log(res));

export function getTimeStringFromMinutes(minutes) {
  const hours = minutes / 60;
  const lastedMinutes = minutes % 60;

  return `${hours}ч ${lastedMinutes}м`;
}

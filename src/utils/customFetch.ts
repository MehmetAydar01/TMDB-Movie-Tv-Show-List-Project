import axios from 'axios';

const productionUrl = 'https://api.themoviedb.org/3';

// Api dökümanında auth için ya direkt url parametresi olarak api keyi yollayacağız ya da bearer token'i yollayacağız. İkisini de aşağıda gösterdim, herhangi birini kullanabiliriz. Bearer token yollayınca headers kısmından yollamak lazım(aşağıdaki gibi), api keyi yollayacaksak da url parametresi olarak yollamak lazım.

export const customFetch = axios.create({
  baseURL: productionUrl,
  // params: {
  //   api_key: import.meta.env.VITE_API_KEY,
  // },
  headers: {
    Authorization: import.meta.env.VITE_BEARER_TOKEN,
  },
});

// Image Api Url
export const imageApiUrl = 'https://image.tmdb.org/t/p/w500';

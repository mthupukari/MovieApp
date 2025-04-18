export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3', 
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: {query: string}) => {
    const endpoint = query 
        ? '${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}'
        : '${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc';

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMBD_CONFIG.headers,
    });

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2JhN2E0YTdhMDdhNzZmMDJlNzI3NjZhMzIyY2FhNyIsIm5iZiI6MTc0NTAxODUzMy4zNDIwMDAyLCJzdWIiOiI2ODAyZGVhNWIxMTNmZjg3MjNkOWI3N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17pkdMxSL2UKOq4OMwipLAm7Of5ZcTnOlimCRHRvKbM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
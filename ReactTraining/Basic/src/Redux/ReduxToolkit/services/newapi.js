import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "eb9a43e9bbmsh0e53b3f6c5f2d03p1959aejsn5e52957c526b"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => "charts/track",
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;

// auth.config.ts
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Spotify from "next-auth/providers/spotify";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
    }),
  ],
};

import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        let payload = await response.json();

        if (payload.mesage === "success") {
          const decodedToken: { id: string } = jwtDecode(payload.token);
          return {
            id: decodedToken.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          throw new Error(payload.mesage || "error credentials");
        }
      },
    }),
  ],
};

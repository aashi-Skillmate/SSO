// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    id?: string | null; // Add your custom property here
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
    picture: string | null;
    username?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id?: string | null; // Add your custom property here
      role?: string;
      picture: string | null;
      username?: string | null;
    };
  }

  interface User {
    role?: string;
    username?: string | null;
  }
}

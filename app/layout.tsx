import Header from "../components/Header";
import Footer from "../components/Footer";
import { Session } from "next-auth";
import AuthContext from "./AuthContext";

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession("");
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="max-w-[900px] mx-auto">
        <AuthContext session={session}>
          <Header />
          {children}
          <footer>
            <Footer />
          </footer>
        </AuthContext>
      </body>
    </html>
  );
}

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sm:srcoll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>{children}</body>
    </html>
  );
}

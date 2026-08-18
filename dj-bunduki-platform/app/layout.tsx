import "./globals.css";

export const metadata = {
  title: "DJ Bunduki | The Champion Of Sound",
  description: "Listen to DJ Bunduki latest mixes, events and entertainment."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

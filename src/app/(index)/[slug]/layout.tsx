import "@/app/globals.css";
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow_Semi_Condensed = Barlow_Semi_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Planets3d",
  description: "Planets3d",
};

export default function PlanetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={barlow_Semi_Condensed.className}>
        {children}
      </body>
    </html>
  );
}
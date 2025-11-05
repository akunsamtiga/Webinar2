import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'In House Training 2023 - IAI Muda Malang Raya',
  description: 'Internalisasi pemahaman dan kapabilitas kepengurusan organisasi IAI Muda Malang Raya Gen 9. #Muda, Berani, Berintegritas!',
  keywords: 'IAI Muda, Malang Raya, In House Training, Organisasi, Akuntansi, Gen 9',
  openGraph: {
    title: 'In House Training 2023 - IAI Muda Malang Raya',
    description: 'Internalisasi pemahaman dan kapabilitas kepengurusan organisasi IAI Muda Malang Raya Gen 9',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
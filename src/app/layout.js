import { Ubuntu } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});

export const metadata = {
  title: 'QuickWash - Professional Car Wash & Detailing Services',
  description:
    'QuickWash provides top-quality car wash and detailing services in Dhaka. Book online and keep your car spotless with our professional, eco-friendly cleaning solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} font-ubuntu antialiased`}
      >
        <Navbar />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

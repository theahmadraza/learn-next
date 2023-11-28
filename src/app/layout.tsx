import '@/app/global.css';
import { Links } from './components/links';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Links />
        {children}</body>
    </html>
  );
}
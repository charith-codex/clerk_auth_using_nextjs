import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" />
      <body>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </ClerkProvider>
  );
}

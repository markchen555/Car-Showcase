import { Footer, Navbar } from "@/components";
import "./globals.css";

// https://github.com/adrianhajdin/project_next13_car_showcase/tree/main
// https://www.youtube.com/watch?v=pUNSHPyVryU&t=851s

export const metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

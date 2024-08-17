import AdminNavBar from "@/Components/Admin_Components/AdminNavBar";
import Sidebar from "@/Components/Admin_Components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <AdminNavBar />
        <div className="flex flex-1 mt-20">
          <Sidebar />
          <main className="flex-1 p-6 ml-60"> {/* Sidebar width accounted for here */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

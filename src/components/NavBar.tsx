"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Navbar = () => {
  const { user, isLoading } = useUser();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">MyApp</div>
        <div>
          {user && (
            <Link
              href="/api/auth/logout"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </Link>
          )}
          {!user && !isLoading && (
            <Link
              href="/api/auth/login?returnTo=%2Fprofile"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

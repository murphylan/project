"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-ibm-plex)]">
      <nav className="flex gap-4">
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
          Dashboard
        </Link>
      </nav>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}

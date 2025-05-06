"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
    router.refresh();
  };

  const handleOverlayClick = (e: { target: any; currentTarget: any }) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-0 rounded-lg w-1/4 min-w-[400px] transform transition-transform duration-300 scale-95">
        Login page
      </div>
    </div>
  );
}

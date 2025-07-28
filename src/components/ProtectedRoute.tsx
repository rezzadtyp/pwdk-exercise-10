"use client";

import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const { isAuthenticated, isHydrated } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.push("/auth/signin");
    }
  }, [isAuthenticated, isHydrated]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

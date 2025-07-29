"use client";

import { useAuthStore } from "@/store/auth-store";
import CreateBlogForm from "../components/CreateBlogForm";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const CreateBlogPage = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <Link
          href={"/blog"}
          className="text-sm text-gray-600 hover:text-brand-700 transition-colors flex items-center mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>
        <CreateBlogForm userId={user?.objectId ?? ""} />
      </div>
    </ProtectedRoute>
  );
};

export default CreateBlogPage;

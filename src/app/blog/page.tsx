"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useGetBlogs from "@/hooks/blog/useGetBlogs";
import { useAuthStore } from "@/store/auth-store";
import { Blog } from "@/types/user.type";
import { ArrowLeftIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const { user } = useAuthStore();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { getBlogs, isLoading } = useGetBlogs();
  const router = useRouter();

  useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };

    fetchBlogs();
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="container mx-auto">
          <Link
            href={"/"}
            className="text-sm text-gray-600 hover:text-brand-700 transition-colors flex items-center mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to home
          </Link>

          <div className="flex items-center justify-between w-full">
            <p>Hello {user?.name}</p>

            <Button onClick={() => router.push("/blog/create")}>
              <PlusIcon className="w-4 h-4" />
              Create Blog
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {blogs.map((blog) => (
              <Card key={blog.objectId}>
                <CardHeader>
                  <div className="w-full h-40">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <CardTitle>{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{blog.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default BlogPage;

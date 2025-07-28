"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useGetBlogs from "@/hooks/blog/useGetBlogs";
import { useAuthStore } from "@/store/auth-store";
import { Blog } from "@/types/user.type";
import { ArrowLeftIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CreateBlogForm from "./components/CreateBlogForm";
import Image from "next/image";

const BlogPage = () => {
  const { user } = useAuthStore();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { getBlogs, isLoading } = useGetBlogs();

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

  console.log(blogs);

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

            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlusIcon className="w-4 h-4" />
                  Create Blog
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="space-y-2">
                  <DialogTitle>Create Blog</DialogTitle>

                  <CreateBlogForm userId={user?.objectId || ""} />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {blogs.map((blog) => (
              <Card key={blog.objectId}>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{blog.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1753262081045-ff9b365ef62a?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="blog"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default BlogPage;

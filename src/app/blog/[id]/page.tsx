"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useGetBlogById from "@/hooks/blog/useGetBlogById";
import useGetUser from "@/hooks/user/useGetUser";
import { Blog, User } from "@/types/user.type";
import { ArrowLeftIcon, CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { getBlogById, isLoading } = useGetBlogById();
  const { getUser } = useGetUser();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getBlogById(id as string);
      setBlog(blog);

      document.title = blog?.title || "Blog Details";

      const user = await getUser(blog?.userId);

      setUser(user);
    };

    fetchBlog();
  }, []);

  if (!blog && !isLoading) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Blog List
        </Link>

        {blog && (
          <article className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-full h-64 overflow-hidden rounded-lg relative">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover absolute top-1/2 transform -translate-y-1/2"
                  />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-3xl font-bold text-gray-900 leading-tight">
                    {blog.title}
                  </CardTitle>

                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      <span>Author: {user?.name || "Unknown Author"}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>
                        Published:{" "}
                        {new Date(blog.created).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed text-lg">
                  {blog.description}
                </div>
              </CardContent>
            </Card>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetailsPage;

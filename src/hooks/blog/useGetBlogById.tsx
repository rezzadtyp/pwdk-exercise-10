import { Blog } from "@/types/user.type";
import { api } from "@/utils/api";
import React, { useState } from "react";

const useGetBlogById = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getBlogById = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await api.get<Blog>(`/blog/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog by id:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getBlogById, isLoading };
};

export default useGetBlogById;

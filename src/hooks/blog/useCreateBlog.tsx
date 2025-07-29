import axios from "axios";
import { useState } from "react";

interface ICreateBlogProps {
  title: string;
  description: string;
  userId: string;
  imageUrl: string;
}

const useCreateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createBlog = async (blog: ICreateBlogProps) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/blog/create", blog);

      return response.data;
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { createBlog, isLoading };
};

export default useCreateBlog;

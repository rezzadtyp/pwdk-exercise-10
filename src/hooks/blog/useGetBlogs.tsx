import axios from "axios";
import { useState } from "react";

const useGetBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/blog");

      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { getBlogs, isLoading };
};

export default useGetBlogs;

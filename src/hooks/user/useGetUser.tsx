import { api } from "@/utils/api";
import { useState } from "react";

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/user/${id}`);

      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getUser, isLoading };
};

export default useGetUser;

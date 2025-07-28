import { useAuthStore } from "@/store/auth-store";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

interface ISignInPayload {
  email: string;
  password: string;
}

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const signIn = async (payload: ISignInPayload) => {
    try {
      setIsLoading(true);

      const response = await axios.post("/api/auth/signin", payload);

      if (response.status === 200) {
        login(response.data);
        return response.data;
      } else {
        toast.error(response.data.message || "Failed to sign in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, signIn };
};

export default useSignIn;

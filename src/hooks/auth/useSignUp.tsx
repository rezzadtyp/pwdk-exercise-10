import { useAuthStore } from "@/store/auth-store";
import { User } from "@/types/user.type";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const signUp = async (payload: ISignUpPayload) => {
    try {
      setIsLoading(true);

      const response = await axios.post<User>("/api/auth/signup", payload);

      if (response.status === 200) {
        login(response.data);
        return response.data;
      } else {
        toast.error("Failed to sign up");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to sign up");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, signUp };
};

export default useSignUp;

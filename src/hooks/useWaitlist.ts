import { useState } from "react";
import { useToast } from "./use-toast";
import { insertEmail } from "@/utils/supabase";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function useWaitlist() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSet, setEmailSet] = useState(() =>
    Boolean(localStorage.getItem("email"))
  );

  const { toast } = useToast();
  async function handleEmail() {
    if (!email)
      return toast({
        title: "Please enter an email address",
      });
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail)
      return toast({
        title: "Please enter a valid email address",
      });

    try {
      setIsLoading(true);
      localStorage.setItem("email", email);
      await insertEmail(email);
      setEmailSet(true);
      toast({
        title: "You have successfully joined the waiting list",
      });
    } catch (err) {
      toast({
        title: "Unable to submit email address",
      });
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleEmail,
    email,
    setEmail,
    emailSet,
    isLoading,
  };
}

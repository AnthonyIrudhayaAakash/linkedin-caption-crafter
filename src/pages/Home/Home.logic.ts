import { useState } from "react";
import { Home, HomeActions } from "./Home.types";

export const useHomeLogic = (): Home & HomeActions => {
  const [input, setInput] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submit = async () => {
    try {
      const a: number = 10;
      console.log("a ; ", a);
    } catch (e) {
      console.log("cannot make an API call : ", e);
    }
  };
  return {
    input,
    setInput,
    isSubmitting,
    setIsSubmitting,
    submit,
  };
};

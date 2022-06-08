import axios from "axios";
import { useMutation } from "react-query";

const useSubscribeToNewsletter = () => {
  const { mutate, isLoading, isSuccess } = useMutation((email: string) =>
    axios.post("https://metapool-homepage.vercel.app/api/newsletter/subscribe", { email }).then((res) => res.data)
  );
  return {
    subscribe: mutate,
    isLoading,
    isSuccess,
  };
};

export default useSubscribeToNewsletter;

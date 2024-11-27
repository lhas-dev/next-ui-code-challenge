import { useQuery } from "@tanstack/react-query";

import { User } from "@/types";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const useUsers = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const request = await fetch(USERS_ENDPOINT);
      const response = await request.json();

      return response as Array<User>;
    },
  });

  return { data, isError, isLoading };
};

export default useUsers;

import { useQuery } from "react-query";
import { getUsers } from "../services/user.service";

export const useGetUserFromUserName = (userName) => {
  return useQuery("users", getUsers, {
    select: (data) => data.data.find((user) => user.login === userName),
  });
};

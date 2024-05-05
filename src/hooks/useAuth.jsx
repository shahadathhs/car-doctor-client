import { useContext } from "react";
import { AuthContest } from "../Providers/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContest)
  return all
}
export default useAuth
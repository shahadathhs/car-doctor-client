import { useContext } from "react";
import { AuthContest } from "../Providers/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContest)
  return auth
}
export default useAuth
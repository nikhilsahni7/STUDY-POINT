import { doLogout } from "@/app/actions";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <form action={doLogout}>
      <Button className="  hover: translate-x-2 px-4 rounded-md" type="submit">
        Logout
      </Button>
    </form>
  );
};

export default Logout;

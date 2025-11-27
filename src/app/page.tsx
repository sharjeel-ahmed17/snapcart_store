import { auth } from "@/auth";
import EditRoleMobile from "@/components/EditRoleMobile";
import Navbar from "@/components/Navbar";
import connectDb from "@/lib/db";
import User from "@/models/user.model";
import { redirect } from "next/navigation";


const Home = async () => {
  await connectDb();
  const session = await auth();
  const user = await User.findById(session?.user?.id).lean();
  // console.log(session);
  console.log("user", user);
  if (!user) {
    redirect("/login");
  }

  // const incomplete = !user.mobile || !user.role (!user.mobile && user.role==="user")
  const incomplete =
  !user.mobile ||
  !user.role ||
  (!user.mobile && user.role === "user");

  if(incomplete){
return <EditRoleMobile/>
  }

  const safeUser = JSON.parse(JSON.stringify(user))
  console.log("plan user : " , safeUser);
  console.log("user : " , user);
  
  return (
    <>
      {/* <EditRoleMobile /> */}
      {/* home page */}
      <Navbar user={safeUser}/>
    </>
  );
};

export default Home;

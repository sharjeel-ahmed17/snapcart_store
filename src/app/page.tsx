import { auth } from "@/auth";
import AdminDashboard from "@/components/AdminDashboard";
import DeliveryBoyDashboard from "@/components/DeliveryBoyDashboard";
import EditRoleMobile from "@/components/EditRoleMobile";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import UserDashboard from "@/components/UserDashboard";
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
    !user.mobile || !user.role || (!user.mobile && user.role === "user");

  if (incomplete) {
    return <EditRoleMobile />;
  }

  const safeUser = JSON.parse(JSON.stringify(user));
  console.log("plan user : ", safeUser);
  console.log("user : ", user);

  return (
    <>
      {/* <EditRoleMobile /> */}
      {/* home page */}

      <Navbar user={safeUser} />
      {user.role === "user" ? (
        <UserDashboard />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : user.role === "deliveryBoy" ? (
        <DeliveryBoyDashboard />
      ) : (
        // fallback – very important!
        <div>Unauthorized or unknown role</div>
      )}
      {/* <Hero /> */}
    </>
  );
};

export default Home;

"use client"
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, User, Lock, ArrowLeft, Eye, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn , useSession } from "next-auth/react";

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading] = useState(false)
const router = useRouter()
const section = useSession()
// console.log(section);

  const handleSignIn = async (e : React.FormEvent)=>{

    e.preventDefault()
setLoading(true)
try {
  await signIn("credentials",  {
    email , password
  } , )
  setLoading(false)
} catch (error) {
  console.log(error);
  setLoading(false)
      
    }
    // setLoading(true)
    // try {
    //   const result = axios.post("/api/auth/login" ,{
    //     name , email , password
    //   })
    //   console.log(result);
    //   setLoading(false)
      
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false)
      
    // }
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-white">
      

      <Card className="w-full max-w-md p-6 shadow-none border-0">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-green-700">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
            SignIn To SnapCart
            <span className="text-green-600">🌱</span>
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSignIn}>
            

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="email"
                placeholder="Your Email"
                className="pl-10"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type={showPassword ? "password" : "text"}
                placeholder="Your Password"
                className="pl-10 pr-10"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Eye
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {(() => {
              const formValidation =
                 email !== "" && password !== "";
              return (
                <Button disabled={!formValidation  || loading}
      className={`w-full transition-colors duration-300 ${
        formValidation
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin"/> : "Login"}
                  
                </Button>
              );
            })()}

            <div className="flex items-center gap-2 py-2">
              <Separator className="flex-1" />
              <span className="text-xs text-gray-400">OR</span>
              <Separator className="flex-1" />
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="h-4 w-4"
              />
              Continue with Google
            </Button>

            <p className="text-center text-sm mt-3 text-gray-500">
             Want To Create An Account?{" "}
              {/* <Link href="/register" className="text-green-600 font-medium">
                Register
              </Link> */}
              <Button onClick={()=>router.push("/register")} variant={"link"} className="text-green-600 font-medium">
                Register
              </Button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, User, Lock, ArrowLeft, Eye, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
// import { signIn } from "@/auth";

type propType = {
  prevStep : (s : number)=>void
}

export default function RegisterForm({prevStep} : propType) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading] = useState(false)
const router = useRouter()
  const handleRegister = async (e : React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const result = axios.post("/api/auth/register" ,{
        name , email , password
      })
      console.log(result);
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
      
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-white">
      <div className="absolute left-4 top-4 flex items-center gap-2 text-green-700" onClick={()=>prevStep(1)}>
        <ArrowLeft className="h-4 w-4" />
        <Button  className="text-sm font-medium bg-white text-black hover:bg-white cursor-pointer">
          Back
        </Button>
      </div>

      <Card className="w-full max-w-md p-6 shadow-none border-0">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-green-700">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
            Join Snapcart today
            <span className="text-green-600">🌱</span>
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Your Name"
                className="pl-10"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

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
                name !== "" && email !== "" && password !== "";
              return (
                <Button disabled={!formValidation  || loading}
      className={`w-full transition-colors duration-300 ${
        formValidation
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin"/> : "Register"}
                  
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
              onClick={()=>signIn("google")}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="h-4 w-4"
              />
              Continue with Google
            </Button>

            <p className="text-center text-sm mt-3 text-gray-500">
              Already have an account?{" "}
              <Button variant={"link"} onClick={()=>router.push("/login")} className="text-green-600 font-medium">
                Sign in
              </Button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

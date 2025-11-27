"use client"
import React, { useState } from 'react';
import { UserCog, User, Bike, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Standard Shadcn utility
import axios from 'axios';
import { redirect } from 'next/navigation';



const EditRoleMobile = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [mobile , setMobile] = useState("")

const data= {
    role : selectedRole,
    mobile
}
  console.log(data);
  
  const roles = [
    {
      id: 'admin',
      label: 'Admin',
      icon: UserCog,
    },
    {
      id: 'user',
      label: 'User',
      icon: User,
    },
    {
      id: 'deliveryBoy',
      label: 'Delivery Boy',
      icon: Bike,
    },
  ];


  const handleEdit = async ()=>{
    try {
        const res = await axios.post("/api/user/edit-role-mobile" , data)
        // console.log("user data", res?.data);
        redirect("/")
        
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="min-h-screen w-full bg-[#f0fdf7] flex flex-col items-center justify-center p-4">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-green-800 mb-10">
        Select Your Role
      </h1>

      {/* Role Cards */}
      <div className="flex flex-col sm:flex-row gap-6 mb-12">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;

          return (
            <Card
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={cn(
                "w-40 h-40 cursor-pointer transition-all duration-200 border-2 flex items-center justify-center hover:shadow-md",
                isSelected
                  ? "border-green-600 bg-white ring-2 ring-green-100"
                  : "border-transparent bg-white shadow-sm hover:border-green-200"
              )}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <Icon
                  className={cn(
                    "w-8 h-8 transition-colors",
                    isSelected ? "text-green-700" : "text-gray-600"
                  )}
                />
                <span
                  className={cn(
                    "font-medium transition-colors",
                    isSelected ? "text-green-700" : "text-gray-700"
                  )}
                >
                  {role.label}
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Input Section */}
      <div className="w-full max-w-xs space-y-3 mb-12">
        <Label 
          htmlFor="mobile" 
          className="text-gray-700 font-medium text-center block"
        >
          Enter Your Mobile No.
        </Label>
        <Input
          id="mobile"
          type="tel"
          placeholder="eg. 0000000000"
          className="bg-gray-50/50 border-gray-200 focus:border-green-500 focus:ring-green-200 h-11 text-center"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
        />
      </div>

      {/* Navigation Button */}
      <Button
        variant="secondary"
        className="rounded-full px-8 py-6 bg-gray-200 hover:bg-gray-300 text-gray-600 font-medium text-md shadow-sm transition-all"
        disabled={mobile.length!==10 || !selectedRole}
        onClick={handleEdit}
      >
        Go to Home
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
};

export default EditRoleMobile;
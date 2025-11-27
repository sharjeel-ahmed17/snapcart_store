"use client";

import { ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { IUser } from "@/types/types";
import { signOut } from "next-auth/react";

export default function Navbar({ user }: { user: IUser }) {
  return (
    <nav className="w-full bg-green-500 px-5 py-3 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Snapcart</h1>

        {/* Search */}
        <div className="relative hidden w-full max-w-xl md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search groceries..."
            className="pl-9 bg-white rounded-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Button
            size="icon"
            variant="ghost"
            className="relative text-white hover:bg-green-600"
          >
            <ShoppingCart />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              4
            </span>
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer bg-white text-green-600">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                )}
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              {/* User Info */}
              <div className="flex items-center gap-3 px-3 py-2">
                <Avatar className="h-9 w-9">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="user"
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <AvatarFallback>
                      {user?.name?.[0] ?? "U"}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {user?.role ?? "User"}
                  </p>
                </div>
              </div>

              <DropdownMenuItem>My Orders</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500" 
              onClick={()=>signOut({"callbackUrl" : "/login"})}
              >
                {

                "Logout"
                }
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

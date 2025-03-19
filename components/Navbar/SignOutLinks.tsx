'use client'

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner"

const SignOutLinks = () => {
    const handleLogout = () => {
        toast('Logout Successfully!!')
    }

  return (
    <SignOutButton>
      <button className="w-full text-left cursor-pointer" onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};
export default SignOutLinks;

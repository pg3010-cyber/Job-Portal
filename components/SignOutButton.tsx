"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-sm font-semibold text-primary-200 cursor-pointer hover:opacity-80"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
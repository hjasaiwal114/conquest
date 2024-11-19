"use client";
import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-3xl">Hello app!</h1>
      <h3 className="text-2xl font-semibold">
        User session data;
      </h3>
    </div>
  )
}
"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";

const page = () => {
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <Image src={user?.photoURL} alt="/" width={50} height={50}></Image>
          <p>Welcome {user.displayName}</p>
        </div>
      ) : (
        <p>You must be logged in to view this page</p>
      )}
    </div>
  );
};
export default page;

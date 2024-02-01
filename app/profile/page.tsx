"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import SupportBlock from "./SupportBlock";
import AccountBlock from "./AccountBlock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  const profScope = useRef(null);
  useLayoutEffect(() => {
    user && profScope.current
      ? gsap.from(".profileAnimations", {
          scrollTrigger: {
            trigger: profScope.current,
            invalidateOnRefresh: false,
          },
          duration: 0.3,
          y: 100,
          opacity: 0,
          stagger: { each: 0.5 },
        })
      : null;
  }, [profScope.current, user]);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <div
      ref={profScope}
      className="p-4 flex h-[100vh] justify-start items-start w-full Container"
    >
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="w-full h-full PageStyles">
          <AccountBlock
            photoURL={user.photoURL}
            displayName={user.displayName}
            email={user.email}
          />
          <div className="flex justify-center items-center profileAnimations">
            Here is user info
          </div>
          <SupportBlock />
        </div>
      ) : (
        <p>You must be logged in to view this page</p>
      )}
    </div>
  );
};
export default page;

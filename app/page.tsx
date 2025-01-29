"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/en");
  };

  useEffect(() => {
    handleClick();
  });

  return <></>;
}

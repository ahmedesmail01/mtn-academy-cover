"use client";
import { MainCarousel } from "@/components/common/home/MainCarousel";
import * as React from "react";
import HomeContent from "@/components/common/home/HomeContent";
import FreeStudySection from "@/components/common/home/FreeStudySection";

export default function Page() {
  return (
    <div className="w-full pt-5 px-3">
      <MainCarousel />
      <HomeContent />
      <FreeStudySection />
    </div>
  );
}

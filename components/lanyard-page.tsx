"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LanyardWithControls from "@/components/lanyard-with-controls";
import { decryptLanyardData, type LanyardData } from "@/lib/utils";

function LanyardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Decrypt lanyard data (username + variant) from URL params if present
  const lanyardData = useMemo((): LanyardData | null => {
    const encrypted = searchParams.get("u");
    if (encrypted) {
      return decryptLanyardData(encrypted);
    }
    return null;
  }, [searchParams]);

  // Redirect to home if no valid encrypted data is provided
  useEffect(() => {
    if (lanyardData === null) {
      router.replace("/");
    }
  }, [lanyardData, router]);

  // Show loading while checking/redirecting
  if (lanyardData === null) {
    return (
      <main className="relative w-full min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </main>
    );
  }

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center">
      <LanyardWithControls
        position={[0, 0, 18]}
        containerClassName="relative w-full h-[58vh] lg:h-[74vh]"
        defaultName={lanyardData.username}
        defaultVariant={lanyardData.variant}
      />
    </main>
  );
}

export default function LanyardPage() {
  return (
    <Suspense fallback={
      <main className="relative w-full min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </main>
    }>
      <LanyardContent />
    </Suspense>
  );
}

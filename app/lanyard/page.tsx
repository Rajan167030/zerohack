import type { Metadata } from "next";
import LanyardPage from "@/components/lanyard-page";

// Event details - ZeroHack Hackathon
const EVENT_NAME = "ZeroHack";
const EVENT_CITY = "Delhi";
const EVENT_DATE = "November 2026";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zerohour.vercel.app";

// Decryption helper for metadata generation
function decryptLanyardData(encrypted: string): { username: string; variant: "dark" | "light" } | null {
  const OBFUSCATION_KEY = "v0gdl";
  
  if (!encrypted) return null;
  try {
    let base64 = encrypted.replace(/-/g, "+").replace(/_/g, "/");
    const padding = (4 - (base64.length % 4)) % 4;
    base64 += "=".repeat(padding);
    
    const binary = Buffer.from(base64, "base64").toString("binary");
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    
    if (decoded.startsWith(`${OBFUSCATION_KEY}:`)) {
      const withoutKey = decoded.slice(OBFUSCATION_KEY.length + 1);
      const colonIndex = withoutKey.indexOf(":");
      if (colonIndex === -1) return null;
      
      const variant = withoutKey.slice(0, colonIndex) as "dark" | "light";
      const username = withoutKey.slice(colonIndex + 1);
      
      if (variant !== "dark" && variant !== "light") return null;
      
      return { username, variant };
    }
    return null;
  } catch {
    return null;
  }
}

interface PageProps {
  searchParams: Promise<{ u?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const encrypted = resolvedSearchParams.u;
  const data = encrypted ? decryptLanyardData(encrypted) : null;
  
  const userName = data?.username || "Hacker";
  const hasUser = !!data?.username;
  
  const title = hasUser 
    ? `${userName} | ${EVENT_NAME} - ${EVENT_CITY}`
    : `Generate Your Badge | ${EVENT_NAME} - ${EVENT_CITY}`;
  
  const description = hasUser
    ? `${userName} is joining ${EVENT_NAME} in ${EVENT_CITY} - ${EVENT_DATE}. The ultimate Doomsday-themed hackathon by DNA Coders!`
    : `Create and customize your personalized ${EVENT_NAME} hackathon badge. Join Delhi's most epic hackathon powered by ZeroCarbon.`;

  const pageUrl = encrypted 
    ? `${SITE_URL}/lanyard?u=${encrypted}`
    : `${SITE_URL}/lanyard`;

  // OG Image URLs - different formats for different platforms
  const ogImageUrl = encrypted
    ? `${SITE_URL}/api/og?u=${encrypted}&format=og`
    : `${SITE_URL}/api/og?format=og`;
  
  const twitterImageUrl = encrypted
    ? `${SITE_URL}/api/og?u=${encrypted}&format=twitter`
    : `${SITE_URL}/api/og?format=twitter`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: `${EVENT_NAME} - ${EVENT_CITY}`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${userName} - ${EVENT_NAME} ${EVENT_CITY}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@DNACoders",
      images: [twitterImageUrl],
    },
  };
}

export default function Page() {
  return <LanyardPage />;
}

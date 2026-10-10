import { ImageResponse } from "next/og";

// Decryption helper
function decryptLanyardData(
  encrypted: string
): { username: string; variant: "dark" | "light" } | null {
  const OBFUSCATION_KEY = "v0gdl";

  if (!encrypted) return null;
  try {
    let base64 = encrypted.replace(/-/g, "+").replace(/_/g, "/");
    const padding = (4 - (base64.length % 4)) % 4;
    base64 += "=".repeat(padding);

    const binary = atob(base64);
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

async function loadGoogleFont (font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
    const css = await (await fetch(url)).text()
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

    if (resource) {
        const response = await fetch(resource[1])

        if (response.status == 200) {
            return await response.arrayBuffer()
        }
    }

    throw new Error('failed to load font data')
}

export async function GET(request: Request) {
  try {

      // Event details - ZeroHack Hackathon
      const EVENT_CITY = "DELHI, INDIA";
      const EVENT_DATE = "NOVEMBER 2026";
      const TITLE = 'ZEROHACK'
      const SUBTITLE = 'by Stackfolk x ZeroCarbon'

    const { searchParams } = new URL(request.url);
    const encrypted = searchParams.get("u");
    const format = searchParams.get("format") || "og"; // og, twitter, linkedin, square

    const data = encrypted ? decryptLanyardData(encrypted) : null;
    const userName = data?.username || "Hacker";
    const variant = data?.variant || "dark";

    // Format dimensions
    const dimensions = {
      og: { width: 1200, height: 630 }, // Facebook, LinkedIn, Discord
      twitter: { width: 1200, height: 600 }, // Twitter summary_large_image
      linkedin: { width: 1200, height: 627 }, // LinkedIn optimal
      square: { width: 1200, height: 1200 }, // Instagram, WhatsApp
    };

    const { width, height } = dimensions[format as keyof typeof dimensions] || dimensions.og;

    // Colors based on variant - Doomsday theme
    const isDark = variant === "dark";
    const bgColor = isDark ? "#0a0a0a" : "#ffffff";
    const textColor = isDark ? "#ffffff" : "#000000";
    const accentColor = "#22c55e"; // Green accent for Doomsday theme
    const mutedColor = "#878787";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: bgColor,
            fontFamily: 'Geist',
            fontSize: 48,
            padding: "60px",
            position: "relative",
          }}
        >
          {/* Red glow accent */}
          <div
            style={{
              position: "absolute",
              top: "-200px",
              left: "50%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              transform: "translateX(-50%)",
            }}
          />
          
          {/* Header with logo and location */}
          <div style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              marginBottom: '24px'
          }}>
            {/* Lightning bolt icon */}
            <svg width="80" height="80" viewBox="0 0 24 24" fill={accentColor}>
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
              <span style={{
                  color: textColor,
                  textTransform: 'uppercase',
                  lineHeight: '48px',
                  fontSize: '36px',
              }}>{EVENT_CITY}</span>
              <span style={{
                  color: mutedColor,
                  textTransform: 'uppercase',
                  lineHeight: '36px',
                  fontSize: '28px',
              }}>{EVENT_DATE}</span>
            </div>
          </div>
          
          {/* Main title */}
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '24px'
          }}>
              <span style={{
                  color: accentColor,
                  fontSize: '140px',
                  lineHeight: '130px',
                  fontWeight: 'bold',
                  letterSpacing: '-4px',
              }}>
                  {TITLE}
              </span>
              <span style={{
                  color: mutedColor,
                  fontSize: '32px',
                  lineHeight: '40px',
                  textTransform: 'uppercase',
              }}>
                  {SUBTITLE}
              </span>
          </div>
          
          {/* Username */}
          <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
          }}>
              <span style={{
                  color: mutedColor,
                  lineHeight: '48px',
                  textTransform: 'uppercase',
                  fontSize: '32px',
              }}>
                  Hacker:
              </span>
              <span style={{
                  color: textColor,
                  lineHeight: '48px',
                  textTransform: 'uppercase',
                  fontSize: '40px',
                  fontWeight: 'bold',
              }}>
                  {userName}
              </span>
          </div>
        </div>
      ),
      {
        width,
        height,
          fonts: [
              {
                  name: 'Geist',
                  data: await loadGoogleFont('Geist', TITLE + SUBTITLE),
                  style: 'normal',
              },{
                  name: 'Geist',
                  data: await loadGoogleFont('Geist', userName),
                  style: 'normal',
              },
          ],
      }
    );
  } catch (e) {
    console.log(`OG Image Generation Error: ${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

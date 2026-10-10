"use client";

import { forwardRef, useImperativeHandle } from "react";
import lanyardArt from "@/components/ui/lanyard.png";

export type CardVariant = "dark" | "light";

interface CardTemplateProps {
  userName: string;
  variant: CardVariant;
  onTextureReady: (dataUrl: string) => void;
  city?: string;
  date?: string;
}

export interface CardTemplateRef {
  captureTexture: () => Promise<void>;
  exportCard: () => void;
}

const CANVAS_SIZE = 1376;
const LANYARD_ART_SRC = typeof lanyardArt === "string" ? lanyardArt : lanyardArt.src;

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });

const CardTemplate = forwardRef<CardTemplateRef, CardTemplateProps>(
  ({ userName, variant, onTextureReady, city = "DELHI", date = "NOVEMBER 2026" }, ref) => {
    const textColor = variant === "dark" ? "#ffffff" : "#1a1a1a";
    const bgColorStart = variant === "dark" ? "#0d1f0d" : "#e8f5e8";
    const bgColorEnd = variant === "dark" ? "#050a05" : "#f0faf0";
    const accentColor = "#22c55e"; // Green/Doomsday accent
    const gridColor = variant === "dark" ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.15)";
    const glowAlpha = variant === "dark" ? 0.3 : 0.2;

    const drawCustomCard = async (ctx: CanvasRenderingContext2D, mode: "texture" | "export" = "texture") => {
      // The GLB maps one card face to half of the texture atlas.
      // Compose text in the left half for runtime texture so front face shows complete text.
      const centerX = mode === "texture" ? CANVAS_SIZE / 4 : CANVAS_SIZE / 2;
      const leftBound = mode === "texture" ? 72 : 200;
      const rightBound = mode === "texture" ? CANVAS_SIZE / 2 - 72 : CANVAS_SIZE - 200;
      const titleSize = mode === "texture" ? 84 : 100;
      const subtitleSize = mode === "texture" ? 28 : 32;
      const roleSize = mode === "texture" ? 22 : 24;
      const nameSize = mode === "texture" ? 60 : 72;
      const citySize = mode === "texture" ? 38 : 48;
      const dateSize = mode === "texture" ? 30 : 36;

      // Draw themed background
      const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_SIZE);
      gradient.addColorStop(0, bgColorStart);
      gradient.addColorStop(1, bgColorEnd);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Draw accent glow at top
      const glowGradient = ctx.createRadialGradient(
        CANVAS_SIZE / 2, 200, 0,
        CANVAS_SIZE / 2, 200, 400
      );
      glowGradient.addColorStop(0, `rgba(34, 197, 94, ${glowAlpha})`);
      glowGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, CANVAS_SIZE, 600);

      // Draw grid pattern
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < CANVAS_SIZE; i += 48) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, CANVAS_SIZE);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(CANVAS_SIZE, i);
        ctx.stroke();
      }

      // Draw lanyard artwork/logo with size tuned per render mode.
      try {
        const logoImage = await loadImage(LANYARD_ART_SRC);
        const logoWidth = mode === "texture" ? 540 : 780;
        const logoHeight = (logoImage.height / logoImage.width) * logoWidth;
        const logoX = centerX - logoWidth / 2;
        const logoY = mode === "texture" ? 68 : 60;

        ctx.save();
        ctx.globalAlpha = variant === "dark" ? 0.95 : 0.88;
        ctx.drawImage(logoImage, logoX, logoY, logoWidth, logoHeight);
        ctx.restore();
      } catch {
        // Keep card generation resilient if the artwork fails to load.
      }

      // Draw "ZEROHACK" title
      ctx.fillStyle = accentColor;
      ctx.font = `bold ${titleSize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("ZEROHACK", centerX, mode === "texture" ? 318 : 360);

      // Draw tagline
      ctx.fillStyle = variant === "dark" ? '#888888' : '#666666';
      ctx.font = `${subtitleSize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText("by Stackfolk & ZeroCarbon", centerX, mode === "texture" ? 386 : 430);

      // Draw decorative line
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(leftBound, mode === "texture" ? 438 : 490);
      ctx.lineTo(rightBound, mode === "texture" ? 438 : 490);
      ctx.stroke();

      // Draw "HACKER" label
      ctx.fillStyle = variant === "dark" ? '#666666' : '#888888';
      ctx.font = `${roleSize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText("HACKER", centerX, mode === "texture" ? 506 : 562);

      // Draw user name large
      const displayName = userName || "YOUR NAME";
      ctx.fillStyle = textColor;
      ctx.font = `bold ${nameSize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(displayName.toUpperCase(), centerX, mode === "texture" ? 632 : 700);

      // Draw city and date at bottom
      ctx.fillStyle = accentColor;
      ctx.font = `bold ${citySize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(city.toUpperCase(), centerX, CANVAS_SIZE - (mode === "texture" ? 252 : 240));

      ctx.fillStyle = variant === "dark" ? '#878787' : '#666666';
      ctx.font = `${dateSize}px Arial, sans-serif`;
      ctx.fillText(date.toUpperCase(), centerX, CANVAS_SIZE - (mode === "texture" ? 194 : 176));

      // Draw bottom accent line
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(leftBound + 90, CANVAS_SIZE - (mode === "texture" ? 132 : 120));
      ctx.lineTo(rightBound - 90, CANVAS_SIZE - (mode === "texture" ? 132 : 120));
      ctx.stroke();
    };

    const captureTexture = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      const ctx = canvas.getContext("2d");
      
      if (!ctx) return;

      await drawCustomCard(ctx, "texture");

      const dataUrl = canvas.toDataURL("image/png");
      onTextureReady(dataUrl);
    };

    const exportCard = async () => {
      const CROP_BOTTOM = 334;
      const EXPORT_HEIGHT = CANVAS_SIZE - CROP_BOTTOM;

      const fullCanvas = document.createElement("canvas");
      fullCanvas.width = CANVAS_SIZE;
      fullCanvas.height = CANVAS_SIZE;
      const fullCtx = fullCanvas.getContext("2d");
      
      if (!fullCtx) return;

      await drawCustomCard(fullCtx, "export");

      // Create cropped export canvas
      const exportCanvas = document.createElement("canvas");
      exportCanvas.width = CANVAS_SIZE;
      exportCanvas.height = EXPORT_HEIGHT;
      const exportCtx = exportCanvas.getContext("2d");

      if (!exportCtx) return;

      exportCtx.drawImage(
        fullCanvas,
        0, 0, CANVAS_SIZE, EXPORT_HEIGHT,
        0, 0, CANVAS_SIZE, EXPORT_HEIGHT
      );

      const dataUrl = exportCanvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = `zerohack-delhi-${userName || "card"}.png`;
      link.href = dataUrl;
      link.click();
    };

    useImperativeHandle(ref, () => ({
      captureTexture,
      exportCard,
    }));

    return null;
  }
);

CardTemplate.displayName = "CardTemplate";

export default CardTemplate;

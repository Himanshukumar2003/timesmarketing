"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(function () {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .nf-root {
          min-height: 100vh;
          background: #020b18;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .nf-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(30, 100, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 100, 255, 0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridShift 20s linear infinite;
        }
        @keyframes gridShift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        .nf-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: orbPulse 6s ease-in-out infinite alternate;
        }
        .nf-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(30,100,255,0.18) 0%, transparent 70%);
          top: -100px; left: -100px;
        }
        .nf-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,180,255,0.14) 0%, transparent 70%);
          bottom: -80px; right: -80px;
        }
        .nf-orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(80,60,255,0.12) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        @keyframes orbPulse {
          from { opacity: 0.6; transform: scale(1); }
          to { opacity: 1; transform: scale(1.15); }
        }

        .nf-card {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 60px 48px;
          max-width: 680px;
          width: 90%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(30,100,255,0.2);
          border-radius: 24px;
          backdrop-filter: blur(12px);
          box-shadow:
            0 0 0 1px rgba(30,100,255,0.05) inset,
            0 32px 80px rgba(0,0,0,0.5);
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .nf-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .nf-code {
          font-family: 'Syne', sans-serif;
          font-size: clamp(100px, 18vw, 180px);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #1e64ff 0%, #00b4ff 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -4px;
          filter: drop-shadow(0 0 40px rgba(30,100,255,0.4));
          animation: codeGlow 3s ease-in-out infinite alternate;
        }
        @keyframes codeGlow {
          from { filter: drop-shadow(0 0 20px rgba(30,100,255,0.3)); }
          to { filter: drop-shadow(0 0 60px rgba(0,180,255,0.6)); }
        }

        .nf-divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #1e64ff, #00b4ff);
          border-radius: 99px;
          margin: 16px auto 28px;
          animation: dividerExpand 0.8s 0.4s ease both;
        }
        @keyframes dividerExpand {
          from { width: 0; opacity: 0; }
          to { width: 80px; opacity: 1; }
        }

        .nf-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          color: #e8f0ff;
          margin-bottom: 14px;
        }

        .nf-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(160,190,255,0.7);
          line-height: 1.7;
          max-width: 440px;
          margin: 0 auto 36px;
        }

        .nf-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
          border: none;
        }

        .nf-btn-primary {
          background: linear-gradient(135deg, #1e64ff, #0099ee);
          color: #fff;
          box-shadow: 0 4px 20px rgba(30,100,255,0.4);
        }
        .nf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(30,100,255,0.6);
        }

        .nf-btn-secondary {
          background: rgba(30,100,255,0.1);
          color: #7eb8ff;
          border: 1px solid rgba(30,100,255,0.25);
        }
        .nf-btn-secondary:hover {
          background: rgba(30,100,255,0.2);
          transform: translateY(-2px);
        }

        .nf-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          background: rgba(30,100,255,0.1);
          border: 1px solid rgba(30,100,255,0.25);
          border-radius: 99px;
          color: #7eb8ff;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .nf-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1e64ff;
          animation: blink 1.5s step-end infinite;
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }
      `}</style>

      <div className="nf-root">
        <div className="nf-grid" />
        <div className="nf-orb nf-orb-1" />
        <div className="nf-orb nf-orb-2" />
        <div className="nf-orb nf-orb-3" />

        <div className={`nf-card ${mounted ? "visible" : ""}`}>
          <div className="nf-tag">
            <span className="nf-tag-dot" />
            Error 404
          </div>

          <div className="nf-code">404</div>
          <div className="nf-divider" />

          <h1 className="nf-heading">Oops! Page Not Found</h1>
          <p className="nf-sub">
            The page you’re looking for might have been moved, removed, or is
            temporarily unavailable. Explore Timeskrane’s range of crane systems
            and industrial solutions to find what you need.
          </p>

          <div className="nf-actions">
            <Link href="/" className="nf-btn nf-btn-primary">
              ← Back to Homepage
            </Link>

            <Link href="/contact" className="nf-btn nf-btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

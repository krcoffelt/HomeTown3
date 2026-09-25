"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/site-icons";

export function MarketingAuditStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const heroCta = document.getElementById("hero-audit-cta");
      const auditForm = document.getElementById("audit-form");
      if (!heroCta || !auditForm) return;

      const heroCtaBottom = heroCta.getBoundingClientRect().bottom;
      const formTop = auditForm.getBoundingClientRect().top;
      setVisible(heroCtaBottom < 0 && formTop > window.innerHeight * 0.9);
    };

    updateVisibility();
    const animationFrame = window.requestAnimationFrame(updateVisibility);
    const settledTimer = window.setTimeout(updateVisibility, 300);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(settledTimer);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={
        "fixed inset-x-4 bottom-4 z-40 transition duration-300 sm:hidden " +
        (visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0")
      }
    >
      <Button href="#audit-form" dataAnalytics="cta-audit-sticky" className="h-14 w-full text-base shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
        Get My Free Audit
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

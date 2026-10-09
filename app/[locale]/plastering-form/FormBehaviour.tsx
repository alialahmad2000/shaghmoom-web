"use client";

import { useEffect } from "react";

/**
 * The form's inline script, as a client component (same behaviour as the
 * source): staggered reveal-on-scroll, the sticky station bar that appears
 * once the cover has scrolled away and names the current station, the scroll
 * progress fallback where scroll-driven animations aren't supported, and the
 * copy buttons. Respects prefers-reduced-motion. Renders nothing.
 */
const REVEAL = [
  ".plf-intro .plf-index", ".plf-intro .plf-eyebrow", ".plf-intro .plf-t", ".plf-intro .plf-stack p",
  ".plf-step", ".plf-frame", ".plf-toc .plf-eyebrow", ".plf-toc .plf-t", ".plf-map li",
  ".plf-sh", ".plf-sec > .plf-wrap > .plf-lead", ".plf-sub > h3", ".plf-sub > .plf-lead",
  ".plf-opts > .plf-opt", ".plf-sub > .plf-inl", ".plf-wrap > .plf-inl", ".plf-fields > .plf-f",
  ".plf-row2 > .plf-f", ".plf-tbl", ".plf-grade", ".plf-sheet .plf-legend", ".plf-sheet .plf-lg",
  ".plf-rh", ".plf-rr", ".plf-sheet .plf-foot", ".plf-stages", ".plf-stg", ".plf-sig .plf-card",
  ".plf-lines", ".plf-note", ".plf-close .plf-lockup", ".plf-close .plf-eyebrow", ".plf-close .plf-t",
  ".plf-close .plf-lead", ".plf-cta a", ".plf-ct", ".plf-hl", ".plf-foot .plf-legal", ".plf-foot .plf-meta",
].join(",");

const STAGGER_PARENTS = ["plf-opts", "plf-fields", "plf-grades", "plf-rt", "plf-row2"];

export function FormBehaviour() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".plf-page");
    if (!page) return;
    const cleanups: (() => void)[] = [];
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const canIO = "IntersectionObserver" in window;

    if (canIO && !reduce) {
      const nodes = Array.from(page.querySelectorAll<HTMLElement>(REVEAL));
      const seen = new Map<Node, number>();
      nodes.forEach((el) => {
        if (el.classList.contains("plf-rv")) return;
        el.classList.add("plf-rv");
        const par = el.parentElement as HTMLElement;
        const k = seen.get(par) ?? 0;
        seen.set(par, k + 1);
        const base = STAGGER_PARENTS.some((c) => par.classList.contains(c)) ? 120 : 0;
        el.style.setProperty("--d", `${base + Math.min(k, 7) * 70}ms`);
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("plf-in");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -7% 0px", threshold: 0.02 }
      );
      nodes.forEach((el) => io.observe(el));
      const t = window.setTimeout(() => {
        nodes.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < innerHeight && r.bottom > 0) el.classList.add("plf-in");
        });
      }, 1500);
      cleanups.push(() => {
        io.disconnect();
        window.clearTimeout(t);
      });
    } else {
      page.classList.remove("plf-js");
    }

    // Sticky station bar
    const bar = document.getElementById("bartop");
    const btN = document.getElementById("bt-n");
    const btT = document.getElementById("bt-t");
    const hero = page.querySelector(".plf-hero");
    const secs = Array.from(page.querySelectorAll(".plf-sec"));
    if (canIO && bar && hero && btN && btT) {
      const heroIO = new IntersectionObserver(
        (es) => es.forEach((e) => bar.classList.toggle("plf-on", !e.isIntersecting && e.boundingClientRect.bottom < 0)),
        { threshold: 0 }
      );
      heroIO.observe(hero);
      const cur = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            const r = e.target.querySelector(".plf-ring");
            const t = e.target.querySelector("h2.plf-t");
            if (r && t) {
              btN.textContent = (r.textContent || "").trim();
              btT.textContent = (t.textContent || "").trim();
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      secs.forEach((s) => cur.observe(s));
      cleanups.push(() => {
        heroIO.disconnect();
        cur.disconnect();
      });
    }

    // Progress bar fallback where scroll-driven animations aren't supported
    const prog = document.getElementById("prog");
    const native = window.CSS?.supports?.("animation-timeline: scroll()");
    if (prog && !native) {
      const tick = () => {
        const d = document.documentElement;
        const max = d.scrollHeight - d.clientHeight;
        const p = max > 0 ? (d.scrollTop || document.body.scrollTop) / max : 0;
        prog.style.transform = `scaleX(${p})`;
      };
      addEventListener("scroll", tick, { passive: true });
      tick();
      cleanups.push(() => removeEventListener("scroll", tick));
    }

    // Copy buttons — "__PAGE_URL__" copies this page's real URL
    const onCopy = (ev: Event) => {
      const btn = (ev.target as HTMLElement).closest<HTMLButtonElement>(".plf-copy");
      if (!btn || !page.contains(btn)) return;
      let text = btn.getAttribute("data-copy") || "";
      if (text === "__PAGE_URL__") text = location.href.split("#")[0];
      const old = btn.textContent;
      const done = () => {
        btn.textContent = "تم النسخ";
        btn.classList.add("plf-ok");
        window.setTimeout(() => {
          btn.textContent = old;
          btn.classList.remove("plf-ok");
        }, 1800);
      };
      const fallback = () => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          done();
        } catch {}
        document.body.removeChild(ta);
      };
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    };
    page.addEventListener("click", onCopy);
    cleanups.push(() => page.removeEventListener("click", onCopy));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

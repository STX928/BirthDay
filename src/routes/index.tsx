import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import braceletAsset from "@/assets/bracelet-real.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Sweetheart 💖 — 8 November 2026" },
      { name: "description", content: "A little birthday surprise made with love." },
      { property: "og:title", content: "Happy Birthday, Sweetheart 💖" },
      { property: "og:description", content: "Open your gift — a birthday surprise for 8 November 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const hearts = Array.from({ length: 18 }, (_, i) => i);
const confetti = Array.from({ length: 40 }, (_, i) => i);

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <main className="bday-bg relative min-h-screen overflow-hidden px-4 py-16 text-center">
      {hearts.map((i) => (
        <span
          key={i}
          className="float-heart"
          style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.7) % 8}s`, fontSize: `${14 + (i % 5) * 6}px` }}
        >
          ♥
        </span>
      ))}

      <p className="font-script text-2xl text-primary">8 · November · 2026</p>
      <h1 className="font-display mt-2 text-5xl font-bold text-foreground md:text-7xl">
        Happy Birthday,
        <br />
        <span className="text-gradient">Sweetheart</span>
      </h1>
      <div className="mx-auto mt-6 max-w-xl space-y-5 text-muted-foreground">
        <p>I wish you a lifetime full of happiness and love.</p>
        <p>I hope this new year of your life brings you everything your heart wishes for. ❤️</p>
        <p>
          I wish you could see yourself through my eyes, just for a moment, so you could understand how
          incredibly special you are to me. Your smile, your voice, your little habits, and even the smallest
          things about you are things I'll never stop falling in love with.
        </p>
        <p className="font-script text-2xl text-primary">And The End</p>
        <p className="text-foreground">
          Happy Birthday, my love. You're my favorite person, today and always. Tap your gift 🎁
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex min-h-[420px] items-center justify-center">
        {!open ? (
          <button onClick={() => setOpen(true)} className="gift" aria-label="Open your gift">
            <div className="gift-lid">
              <div className="gift-bow" />
            </div>
            <div className="gift-box" />
          </button>
        ) : (
          <>
            {confetti.map((i) => (
              <span
                key={i}
                className="confetti"
                style={{
                  ["--x" as string]: `${Math.cos(i) * (150 + (i % 4) * 60)}px`,
                  ["--y" as string]: `${Math.sin(i) * (150 + (i % 3) * 60)}px`,
                  background: `var(--${["primary", "accent", "gold", "rose"][i % 4]})`,
                }}
              />
            ))}
            <div className="reveal card-glow max-w-sm rounded-3xl bg-card p-5">
              <img src={braceletAsset.url} alt="A bracelet for you" className="w-full rounded-2xl object-cover" />
              <h2 className="font-script mt-5 text-3xl text-primary">For you, my everything</h2>
              <p className="mt-3 text-card-foreground">
                Just like this bracelet, I hope my love stays wrapped around you, reminding you every day how
                special you are to me. HAPPY BIRTHDAY HONEY
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

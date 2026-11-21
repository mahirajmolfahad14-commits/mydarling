"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Heart, Volume2, VolumeX, Sparkles } from "lucide-react";

const stanzas = [
`I keep thinking about your skin.
Not in some poetic, beautiful way.
I mean, I genuinely wonder
how long I'd lose myself
if I had you close enough to kiss.`,
`I'd pull you closer by your waist,
look at you for a moment,
and probably forget whatever
I was going to say.
Then I'd kiss you.`,
`Not a quick kiss before rushing into another.
I'd take my time with you.
Your lips, your cheek, your jaw,
then that little space beneath your ear
that I've imagined kissing far too many times.`,
`I'd love to feel you lean into me,
to hear your breathing change,
to catch that little smile
you'd try so hard to hide.`,
`And I'd kiss your neck, slowly,
letting my lips linger
until neither of us remembers
what we were talking about.`,
`I want to hold you against me,
run my fingertips over your skin,
and discover all those little ways
of making you melt into my arms.`,
`God, I wish you knew
how much I want those ordinary moments—
your head resting against my chest,
my lips wandering back to yours,
your warmth beneath my hands.`,
`And when I finally pull away,
I'd look at you, smile,
and kiss you again.
Because honestly,
I don't think I'd ever get
quite enough of you.`
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openLetter = () => {
    setOpened(true);
    window.setTimeout(() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" }), 180);
  };

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <nav className="topbar">
        <a className="monogram" href="#" aria-label="Back to top">V<span>♥</span></a>
        <span className="topbar-note">A PRIVATE LITTLE WORLD</span>
        <button className="sound-toggle" onClick={() => setMusicOn(!musicOn)} aria-label="Toggle ambience">
          {musicOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
          <span>{musicOn ? "SOUND ON" : "SOUND OFF"}</span>
        </button>
      </nav>

      <section className="hero">
        <div className="hero-ornament ornament-left">✳</div>
        <div className="hero-ornament ornament-right">✳</div>
        <div className="eyebrow"><span /> SOMETHING I WANTED YOU TO HAVE <span /></div>
        <p className="pretitle">For the girl who stays on my mind</p>
        <h1>A little<br /><em>closer</em> to you.</h1>
        <div className="hero-rule"><i /><Heart size={13} fill="currentColor" /><i /></div>
        <p className="hero-copy">Some feelings are too tender for an ordinary message.<br />So I made you a place to feel them.</p>
        <button className="open-button" onClick={openLetter}>
          <span>OPEN YOUR LETTER</span><ArrowDown size={15} strokeWidth={1.5} />
        </button>
        <div className="hero-foot">
          <span>TAKE YOUR TIME</span>
          <span className="foot-dot">✦</span>
          <span>THIS IS JUST FOR YOU</span>
        </div>
        <div className="vertical-note">A NOTE FROM MY HEART · Nº 001</div>
      </section>

      <section className={`letter-section ${opened ? "is-open" : ""}`} id="letter">
        <div className="letter-shell">
          <div className="letter-topline">
            <span>THE THINGS I CAN'T QUITE SAY</span>
            <span>✧ &nbsp; WITH LOVE &nbsp; ✧</span>
          </div>
          <div className="letter-heading">
            <span className="tiny-flower">❧</span>
            <p className="letter-kicker">A POEM FOR YOU</p>
            <h2>Your Skin<br /><em>With My Lips</em></h2>
            <div className="title-flourish"><span />✦<span /></div>
          </div>
          <div className="poem">
            {stanzas.map((stanza, index) => (
              <div className="stanza" key={index}>
                <span className="stanza-number">0{index + 1}</span>
                <p>{stanza}</p>
              </div>
            ))}
          </div>
          <div className="closing">
            <span className="closing-heart">♡</span>
            <p>Always finding my way<br />back to you.</p>
            <span className="signature-line" />
            <span className="signature">Yours, in every quiet moment</span>
          </div>
          <div className="letter-bottomline">
            <span>SEALED WITH A KISS</span>
            <span>♥</span>
            <span>AND A THOUSAND MORE</span>
          </div>
        </div>
        <div className="side-caption side-left">A THOUSAND THOUGHTS, ONE YOU</div>
        <div className="side-caption side-right">READ IT AS SLOWLY AS YOU LIKE</div>
      </section>

      <footer className="footer">
        <div className="footer-star">✧</div>
        <p>Somewhere between every thought<br />and every heartbeat, there is <em>you.</em></p>
        <span className="footer-small">MADE WITH ALL MY AFFECTION</span>
        <div className="footer-heart">♡</div>
      </footer>

      {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>}
      <div className="page-index">01 <span>/</span> 01</div>
      <div className="sparkle-fixed"><Sparkles size={13} /></div>
    </main>
  );
}

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,122,0,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(56,189,248,0.08),_transparent_60%),linear-gradient(180deg,#07091a_0%,#040614_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid-size opacity-[0.35] mix-blend-soft-light" />

      {/* Orange blob */}
      <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[460px] h-[460px] rounded-full bg-fuchsia-500/10 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-3xl animate-blob [animation-delay:8s]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay noise" />
    </div>
  )
}

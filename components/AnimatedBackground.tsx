'use client';

export default function AnimatedBackground() {
  return (
    <div
      className="
        fixed inset-0 z-[-1]
        bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.pink.300),theme(colors.blue.300)),radial-gradient(circle_at_center,theme(colors.purple.200/30),transparent)]
        dark:bg-[linear-gradient(to_right,theme(colors.blue.900),theme(colors.purple.900),theme(colors.blue.900)),radial-gradient(circle_at_center,theme(colors.purple.800/30),transparent)]
        animate-[gradient_20s_ease_infinite,pulse_10s_ease_infinite]
      "
      aria-hidden="true"
    />
  );
}
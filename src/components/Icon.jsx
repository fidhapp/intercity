const paths = {
  crane: (
    <>
      <path d="M4 20h10l2-6h4" />
      <path d="M8 20v8" />
      <path d="M14 8v4" />
      <path d="M4 14h16" />
      <rect x="3" y="18" width="6" height="4" />
    </>
  ),
  infra: (
    <>
      <path d="M4 18h16" />
      <path d="M6 18V8h4v10" />
      <path d="M14 18v-6h4v6" />
      <path d="M4 8h6" />
      <path d="M8 6v4" />
    </>
  ),
  earth: (
    <>
      <path d="M3 16c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
      <path d="M4 19h16" />
      <path d="M8 16v3" />
      <path d="M16 16v3" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 16V8h10v8" />
      <path d="M13 11h4l3 3v2h-7" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="2.2" />
      <circle cx="16" cy="9" r="1.8" />
      <path d="M4.5 18c.4-2.6 2.2-4 4.5-4s4.1 1.4 4.5 4" />
      <path d="M14 14.2c1.4.2 2.6 1.1 3.1 3.3" />
    </>
  ),
  box: (
    <>
      <path d="M3 8l9-4 9 4-9 4-9-4z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M7 10.5V20h10v-9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
};

export default function Icon({ name, size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.crane}
    </svg>
  );
}

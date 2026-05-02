export function AuthBackground() {
  return (
    <>
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="float-slow absolute -top-16 -left-10 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="float-fast absolute top-10 right-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
    </>
  );
}

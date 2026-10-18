export default function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob absolute -top-24 -right-24 size-[28rem] bg-blush/70 blur-3xl animate-float-slow" />
      <div className="blob absolute top-1/3 -left-32 size-[26rem] bg-sky/30 blur-3xl animate-float" />
      <div className="blob absolute -bottom-32 right-1/3 size-[22rem] bg-sun/40 blur-3xl animate-float-slow" />
    </div>
  );
}

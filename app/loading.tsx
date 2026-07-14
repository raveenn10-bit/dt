export default function Loading() {
  return (
    <div className="grid min-h-svh place-items-center bg-ivory text-forest">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-sand border-t-terracotta" />
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em]">Preparing your journey</p>
      </div>
    </div>
  );
}

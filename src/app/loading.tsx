export default function Loading() {
  return (
    <div className="dark min-h-screen pb-20">
      <div className="mx-auto w-[min(1100px,95%)] pt-28 md:pt-32">
        <div className="glass rounded-xl p-6 animate-pulse">
          <div className="h-7 w-40 rounded bg-black/10 mb-3" />
          <div className="h-4 w-72 rounded bg-black/10 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-36 rounded-xl bg-black/10" />
            <div className="h-36 rounded-xl bg-black/10" />
            <div className="h-36 rounded-xl bg-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
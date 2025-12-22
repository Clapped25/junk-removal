export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="animate-pulse space-y-6">
        <div className="h-10 w-1/2 rounded-xl bg-gray-200" />
        <div className="h-5 w-2/3 rounded-xl bg-gray-200" />
        <div className="h-5 w-1/3 rounded-xl bg-gray-200" />

        <div className="grid gap-4 md:grid-cols-3 pt-6">
          <div className="h-32 rounded-2xl bg-gray-200" />
          <div className="h-32 rounded-2xl bg-gray-200" />
          <div className="h-32 rounded-2xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

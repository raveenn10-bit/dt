import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="hidden bg-forest px-4 py-2 text-center text-xs font-bold tracking-wide text-white/85 md:block">
      Private Sri Lanka journeys designed by local specialists ·{" "}
      <Link href="/plan-my-trip" className="focus-ring rounded-sm text-sand underline-offset-4 hover:underline">
        start planning today
      </Link>
    </div>
  );
}

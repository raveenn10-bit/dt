import { redirect } from "next/navigation";

export default async function ThingsToDoDetailRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/experiences/${slug}`);
}

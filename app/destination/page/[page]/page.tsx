import { redirect } from "next/navigation";

export default function DestinationPageRedirect() {
  redirect("/things-to-do");
}

import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { terms } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Terms & Conditions — PeerUp",
  description: terms.description,
};

export default function Page() {
  return <PolicyPage policy={terms} />;
}

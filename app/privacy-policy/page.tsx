import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { privacy } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Privacy Policy — PeerUp",
  description: privacy.description,
};

export default function Page() {
  return <PolicyPage policy={privacy} />;
}

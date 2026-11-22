import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { refund } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Refund Policy — PeerUp",
  description: refund.description,
};

export default function Page() {
  return <PolicyPage policy={refund} />;
}

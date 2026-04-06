import { Suspense } from "react";
import SuccessContent from "@/components/SuccessContent";

export const metadata = {
  title: "Payment Successful",
  description: "Your purchase was successful. You now have access to your blueprint.",
};

export default function SuccessPage() {
  return (
    <Suspense fallback={/* loading spinner */}>
      <SuccessContent />
    </Suspense>
  );
}


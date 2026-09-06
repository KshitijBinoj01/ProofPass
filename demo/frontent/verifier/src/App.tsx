import { useState } from "react";
import V01Checkout from "./views/V01Checkout";
import V02QRModal from "./views/V02QRModal";
import V03Verified from "./views/V03Verified";
import V04Failed from "./views/V04Failed";

export type View = "checkout" | "qr" | "verified" | "failed";

export default function App() {
  const [view, setView] = useState<View>("checkout");

  return (
    <div className="size-full">
      {view === "checkout" && <V01Checkout onVerify={() => setView("qr")} />}
      {view === "qr" && (
        <V02QRModal
          onClose={() => setView("checkout")}
          onSuccess={() => setView("verified")}
          onFail={() => setView("failed")}
        />
      )}
      {view === "verified" && <V03Verified onContinue={() => setView("checkout")} />}
      {view === "failed" && <V04Failed onRetry={() => setView("qr")} />}
    </div>
  );
}

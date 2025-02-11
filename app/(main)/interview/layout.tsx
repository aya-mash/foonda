import { ReactNode, Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}

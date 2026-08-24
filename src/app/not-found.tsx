import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Reveal className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 md:px-6">
      <p className="mb-3 text-xs font-medium tracking-[0.18em] text-primary uppercase">
        404
      </p>
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        That page is not here
      </h1>
      <p className="mt-4 text-muted-foreground">
        The link may be outdated. Head home or jump to services.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild className="h-11 px-5">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-5">
          <Link href="/services">Services</Link>
        </Button>
      </div>
    </Reveal>
  );
}

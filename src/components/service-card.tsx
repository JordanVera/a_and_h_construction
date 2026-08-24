import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:glow-primary">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={service.cardImage}
            alt={service.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-black shadow-lg">
              View service
              <ArrowRightIcon className="size-3.5" />
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-base font-semibold transition-colors group-hover:text-primary">
            {service.shortName}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
        </div>
      </Card>
    </Link>
  );
}

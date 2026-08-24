import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full pt-0">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={service.cardImage}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{service.shortName}</CardTitle>
        <CardDescription>{service.summary}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto border-t-0 bg-transparent">
        <Button asChild variant="outline" className="h-9">
          <Link href={`/services/${service.slug}`}>
            Read more
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

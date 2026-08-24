'use client';

import { StarIcon } from 'lucide-react';
import {
  ReactGoogleReviews,
  type ReactGoogleReview,
} from 'react-google-reviews';

import { Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { reviews as fallbackReviews } from '@/lib/reviews';
import { site } from '@/lib/site';

type DisplayReview = {
  id: string;
  name: string;
  quote: string;
  rating: number;
  photoUrl?: string;
  date?: string | null;
};

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function formatDate(value?: string | null) {
  if (!value) {
    return null;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

function ReviewGrid({ items }: { items: DisplayReview[] }) {
  return (
    <Stagger
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      stagger={0.06}
    >
      {items.map((review) => (
        <StaggerItem key={review.id}>
          <Card className="h-full">
            <CardHeader>
              <div className="mb-3 flex items-center gap-3">
                <Avatar>
                  {review.photoUrl ? (
                    <AvatarImage src={review.photoUrl} alt={review.name} />
                  ) : null}
                  <AvatarFallback>{initials(review.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">{review.name}</CardTitle>
                  {review.date ? (
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Google review
                    </p>
                  )}
                </div>
              </div>
              <div
                className="flex gap-0.5 text-primary"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`size-4 ${index < review.rating ? 'fill-current' : 'opacity-25'}`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                “{review.quote}”
              </p>
            </CardContent>
          </Card>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function FallbackReviews() {
  return (
    <ReviewGrid
      items={fallbackReviews.map((review) => ({
        id: review.name,
        name: review.name,
        quote: review.quote,
        rating: 5,
      }))}
    />
  );
}

function toDisplayReviews(reviews: ReactGoogleReview[]): DisplayReview[] {
  return reviews
    .filter((review) => review.comment?.trim())
    .map((review) => ({
      id:
        review.reviewId ??
        `${review.reviewer.displayName}-${review.createTime}`,
      name: review.reviewer.displayName,
      quote: review.comment.trim(),
      rating: review.starRating,
      photoUrl: review.reviewer.isAnonymous
        ? undefined
        : review.reviewer.profilePhotoUrl,
      date: formatDate(review.createTime),
    }));
}

export function Reviews() {
  const featurableId = site.featurableWidgetId;

  return (
    <Section className="bg-card/40">
      <SectionHeading
        eyebrow="Google reviews"
        title="Trusted by local homeowners"
        description="Live reviews from Google, with names and photos from the people who hired the crew."
      />
      {featurableId ? (
        <ReactGoogleReviews
          layout="custom"
          featurableId={featurableId}
          hideEmptyReviews
          structuredData
          brandName={site.name}
          nameDisplay="fullNames"
          loadingMessage={
            <span className="text-sm text-muted-foreground">
              Loading Google reviews…
            </span>
          }
          errorMessage={<FallbackReviews />}
          renderer={(reviews) => {
            const items = toDisplayReviews(reviews);
            return items.length > 0 ? (
              <ReviewGrid items={items} />
            ) : (
              <FallbackReviews />
            );
          }}
        />
      ) : (
        <FallbackReviews />
      )}
    </Section>
  );
}

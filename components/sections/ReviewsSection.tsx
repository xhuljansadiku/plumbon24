import { Icon } from '@/components/ui/Icon'
import { Container, Section } from '@/components/ui/Layout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { googleRating, reviews, type Review } from '@/lib/reviews'

/**
 * Customer reviews. Renders nothing until genuine reviews are added in lib/reviews.ts.
 * Set `showPlaceholder` to preview the empty state while the site is being built.
 */
export function ReviewsSection({ showPlaceholder = false }: { showPlaceholder?: boolean }) {
  if (!reviews.length && !showPlaceholder) return null

  return (
    <Section tone="white" labelledBy="reviews-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Customer reviews" title="What Our Customers Say" id="reviews-title" />
          {googleRating ? (
            <a
              href={googleRating.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 rounded-xl border border-line px-5 py-4 hover:border-ink"
            >
              <span className="font-display text-3xl font-extrabold text-ink">{googleRating.rating.toFixed(1)}</span>
              <span className="text-sm text-muted">
                Google rating
                <br />
                {googleRating.count} reviews
              </span>
            </a>
          ) : null}
        </div>

        {reviews.length ? (
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={`${review.author}-${review.date ?? review.text.slice(0, 20)}`}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-line-strong bg-mist p-10 text-center text-muted">
            Real customer reviews will be displayed here.
          </p>
        )}
      </Container>
    </Section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
      {review.rating ? (
        <p className="flex gap-1 text-brand-500" aria-label={`Rated ${review.rating} out of 5`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon key={index} name="star" className="size-5" fill={index < (review.rating ?? 0) ? 'currentColor' : 'none'} />
          ))}
        </p>
      ) : null}
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink">“{review.text}”</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold text-ink">{review.author}</span>
        <span className="text-muted"> · {review.source}</span>
      </figcaption>
    </figure>
  )
}

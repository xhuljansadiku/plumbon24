/**
 * Customer reviews.
 *
 * Only add genuine reviews, word for word, from real customers (with permission
 * where required). Never write, edit or "improve" reviews, and never add ratings
 * that can't be verified. The reviews section stays hidden while this list is empty.
 */

export type Review = {
  author: string
  /** Star rating exactly as given by the customer, if any. */
  rating?: 1 | 2 | 3 | 4 | 5
  text: string
  source: 'Google' | 'Yelp' | 'Facebook' | 'Direct'
  /** YYYY-MM or YYYY-MM-DD */
  date?: string
  /** Link to the original review, when public. */
  url?: string
}

export const reviews: Review[] = []

/** Summary from the verified Google Business Profile. Leave null until it exists. */
export const googleRating: { rating: number; count: number; profileUrl: string } | null = null

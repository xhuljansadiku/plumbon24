import { sendGTMEvent } from '@next/third-parties/google'

/**
 * Google Tag Manager container. GTM only loads the container; Google Ads conversion
 * tags, IDs and labels are configured inside GTM, never in this codebase.
 *
 * dataLayer events must never carry visitor data (name, phone, email, message).
 */
export const GTM_ID = 'GTM-KTS5MR48'

/** A visitor tapped or clicked one of our tel: links. `phoneNumber` is the business number in the link. */
export function trackPhoneClick(phoneNumber: string) {
  sendGTMEvent({ event: 'phone_click', phone_number: phoneNumber, page_path: window.location.pathname })
}

/** The contact form was accepted by /api/contact. Call only after a successful response. */
export function trackLeadSubmitted(details: { formLocation: string; serviceType: string }) {
  sendGTMEvent({
    event: 'generate_lead',
    form_id: 'contact_form',
    form_location: details.formLocation,
    service_type: details.serviceType,
  })
}

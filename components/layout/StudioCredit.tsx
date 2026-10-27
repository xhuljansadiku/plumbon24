import Image from 'next/image'
import { Icon } from '@/components/ui/Icon'

/** "Designed & Developed by Illyrian Pixel" signature at the very bottom of the footer. */
export function StudioCredit() {
  return (
    <div className="studio-credit">
      <span aria-hidden="true" className="studio-credit__line studio-credit__line--left" />
      <a href="https://illyrianpixel.com" target="_blank" rel="noopener" className="studio-credit__pill">
        <span className="studio-credit__medallion">
          <Image src="/images/illyrianpixel_logo.svg" alt="" width={26} height={24} className="studio-credit__eagle" unoptimized />
        </span>
        <span className="studio-credit__text">
          <span className="studio-credit__label">Designed &amp; Developed by</span>
          <span className="studio-credit__name">
            Illyrian <em>Pixel</em>
          </span>
        </span>
        <Icon name="arrow-right" className="studio-credit__arrow" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <span aria-hidden="true" className="studio-credit__line studio-credit__line--right" />
    </div>
  )
}

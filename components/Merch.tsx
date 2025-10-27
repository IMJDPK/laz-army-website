import Image from 'next/image'
import { trackMerchClick } from './Analytics'

const WA_NUMBER = '923001234567'

type Item = {
  id: number
  title: string
  price: number
  img: string
}

const formatPrice = (n: number) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(n)

export default function Merch() {
  const items: Item[] = [
    { id: 1, title: 'Laz Army Hoodie', price: 4500, img: '/assets/Banner11.jpeg' },
    { id: 2, title: 'Laz Army Tee', price: 2000, img: '/assets/Banner12.jpeg' },
    { id: 3, title: 'Laz Army Cap', price: 1800, img: '/assets/Banner13.jpeg' },
  ]

  const handleOrderClick = (itemTitle: string) => {
    trackMerchClick(itemTitle)
  }

  return (
    <section id='merch' className='p-8 bg-neutral-900 rounded-xl border border-neutral-800'>
      <div className='text-center mb-8'>
        <h3 className='text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
          Laz Army Merch
        </h3>
        <p className='text-neutral-400'>Rep the movement. Wear the culture.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {items.map((it) => {
          const text = `I want to order ${it.title}`
          const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
          
          return (
            <div
              key={it.id}
              className='bg-black/40 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300'
            >
              <div className='relative h-64 overflow-hidden bg-neutral-900'>
                <Image
                  src={it.img}
                  alt={`${it.title} - Laz Army official merchandise`}
                  fill
                  className='object-contain group-hover:scale-110 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              </div>
              
              <div className='p-5 text-center'>
                <h4 className='text-xl font-bold mb-2 text-white'>{it.title}</h4>
                <p className='text-2xl font-bold text-yellow-400 mb-4'>{formatPrice(it.price)}</p>
                
                <a
                  href={waHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => handleOrderClick(it.title)}
                  className='inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300'
                  aria-label={`Order ${it.title} via WhatsApp`}
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <div className='mt-8 text-center'>
        <p className='text-sm text-neutral-400'>
          Free shipping on orders over PKR 5,000 • Secure payment via WhatsApp
        </p>
      </div>
    </section>
  )
}
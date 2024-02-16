import { api } from '@/data/api'
import { ProductProps } from '@/data/types/product'
import { env } from '@/env'
import Image from 'next/image'
import { ImageResponse } from 'next/og'

import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProductBySlug(slug: string) {
  return await api.get<ProductProps>(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })
}

export default async function OgImage({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const product = await getProductBySlug(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: colors.zinc[900],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={productImageURL}
          alt=""
          style={{
            width: '100%',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}

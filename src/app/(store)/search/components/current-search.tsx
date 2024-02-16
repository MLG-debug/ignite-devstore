import { useSearchParams } from 'next/navigation'
import React from 'react'

export const CurrentSearch = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  )
}

'use client'

import { Skeleton } from '@/components/skeleton'
import { Suspense } from 'react'
import { CurrentSearch } from './components/current-search'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-[400px]" />
        ))}
      </div>
    </div>
  )
}

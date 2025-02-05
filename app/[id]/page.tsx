import React from 'react'
import NewsDetails from '../components/news-details';

function page({
  params
}: {
  params: {
    id: string
  }
}) {
  const { id } = params;
  return (
      <NewsDetails id={id} />
  )
}

export default page

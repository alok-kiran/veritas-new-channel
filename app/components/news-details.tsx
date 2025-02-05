'use client';
import React, { useEffect } from 'react'
import { NewsArticle } from './features-news';
import { UserPen } from 'lucide-react';
import Image from 'next/image';

function NewsDetails({
    id
}: {
    id: string
}) {
const [news, setNews] = React.useState<NewsArticle | null>(null);

    useEffect(() => {
        fetch(`/api/news/${id}`)
            .then(response => response.json())
            .then(data => setNews(data.news));
    }, [id]);
    console.log(news);
  if(!news) return null;

  return (
    <div className="hover-scale transition-all duration-200 animate-scale-in cursor-pointer border-none w-full">
    <article className="w-full md:w-3/4 mx-auto p-6 animate-fade-in">
      {/* News Header */}
      <h1 className="text-4xl font-bold text-card-foreground">{news.title}</h1>

      {/* Author & Date Section */}
      <div className="flex items-center justify-between mt-4 text-muted-foreground text-sm">
        <div className="flex items-center">
          <UserPen className="h-5 w-5 mr-2 text-muted-foreground" />
          <span>
            By <span className="font-semibold">{news.author?.replaceAll("null", "").trim()}</span>
          </span>
        </div>
        <span>
          {new Date(news.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      {/* News Image */}
      <div className="mt-6">
        <Image
          src={news.imageUrls}
          alt={news.title}
            width={800}
            height={600}
          className="w-full h-80 object-cover rounded-md"
        />
      </div>

        {/* News Content */}
        <article className="mt-6 text-foreground leading-8 text-lg">
            {news.content}
        </article>
      {/* Tags Section */}
      <div className="mt-6 flex flex-wrap gap-2">
        {news.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
            {tag.startsWith("#") ? tag : `#${tag}`}
          </span>
        ))}
      </div>
    </article>
  </div>
  )
}

export default NewsDetails

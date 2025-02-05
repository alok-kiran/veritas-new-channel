'use client';

import React, { useState } from 'react';
import { Card } from './ui/card';
import { UserPen } from "lucide-react";
import Image from 'next/image';
import FeaturedNewsSkeleton from './skeleton/featured-news-skeleton';
import Link from 'next/link';

export interface NewsArticle {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  author: string;
  authorEmail: string;
  createdAt: string;
  updatedAt: string;
  imageUrls: string;
  category: string;
}

const FeaturedNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  React.useEffect(() => {
    setLoading(true);
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data.news))
      .finally(() => setLoading(false));
  }, []);

  const toggleReadMore = (id: string) => {
    setExpanded(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  if (loading) {
    return <FeaturedNewsSkeleton />;
  }

  return (
    <>
      {news.slice(0, 4).map((news: NewsArticle) => {
        const isExpanded = expanded[news._id];
        const contentWords = news.content.split(' ');
        const shouldTruncate = contentWords.length > 50;
        const displayedContent = shouldTruncate && !isExpanded
          ? contentWords.slice(0, 50).join(' ') + '...'
          : news.content;

        return (
          <Link key={news._id} href={`/${news._id}`}>
            <Card className="mb-8 hover-scale transition-all duration-200 animate-scale-in cursor-pointer">
            <article className="max-w-4xl mx-auto p-6 bg-card shadow-md rounded-lg animate-fade-in">
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
                  height={400}
                  className="w-full h-80 object-cover rounded-md"
                />
              </div>

              {/* News Content */}
              <div className="mt-6 text-foreground leading-8 text-lg">
                {displayedContent.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
                {shouldTruncate && (
                  <button
                    onClick={() => toggleReadMore(news._id)}
                    className="text-blue-500 hover:underline"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>

              {/* Tags Section */}
              <div className="mt-6 flex flex-wrap gap-2">
                {news.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                    {tag.startsWith("#") ? tag : `#${tag}`}
                  </span>
                ))}
              </div>
            </article>
          </Card>
            </Link>
        );
      })}
    </>
  );
};

export default FeaturedNews;
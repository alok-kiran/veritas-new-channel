'use client';

import React from 'react'
import { Card } from './ui/card';
import { UserPen } from "lucide-react";
import Image from 'next/image';
import FeaturedNewsSkeleton from './skeleton/featured-news-skeleton';

export interface NewsArticle {
  id: string;
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


const  FeaturedNews = () =>  {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  console.log(loading);
  React.useEffect(() => {
    setLoading(true);
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data.news)).finally(() => setLoading(false));
  }, []);
  if(loading){
    return (
      <FeaturedNewsSkeleton />
    )
  }
  return (
  <div>
    {news.slice(0,1).map((item: NewsArticle) => (
       <Card key={item.id} className="mb-8 hover-scale transition-all duration-200 animate-scale-in cursor-pointer">
          <Image 
              src={item.imageUrls}
              alt="News"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
          <div className="p-6">
            <span className="text-red-600 font-medium uppercase">{item.category}</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
             {item.title}
            </h2>
            <p className="text-muted-foreground">
            {item.content}
            </p>
            <div className="mt-4 flex flex-wrap">
            {item.tags.map((tag, index) => (
              <span key={index} className="text-sm text-muted-foreground mr-2 mb-2">
              {tag?.startsWith("#") ? tag : `#${tag}`}
              </span>
            ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-6 bg-muted">
            <div className="flex items-center">
            <UserPen className="h-6 w-6 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              By <span className="font-semibold">{item.author?.replaceAll("null", "")}</span>
            </span>
            </div>
            <span className="text-sm text-muted-foreground">
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            </span>
            </div>
        </Card>
    ))}
  </div> 
  )               
}

export default FeaturedNews;
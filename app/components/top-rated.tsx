'use client';

import React from 'react'
import { Card } from './ui/card';
import { UserPen } from 'lucide-react';
import { NewsArticle } from './features-news';
import TopReadSkeleton from './skeleton/top-read-skeleton';
import Link from 'next/link';

function TopRated() {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch('/api/news')
            .then(response => response.json())
            .then(data => setNews(data.news)).finally(() => setLoading(false));
    }, []);

    if(loading){
        return (
           <div className="lg:col-span-3">
                <TopReadSkeleton />
           </div> 
        )
    }

  return (
    <div className="lg:col-span-3">
    <div className="mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <h2 className="text-2xl font-bold text-red-600 mb-4">Top Read</h2>
      <div className="space-y-6">
        {news.slice(2,5).map((item: NewsArticle) => (
          <Card key={item._id} className="p-4 hover-scale transition-all duration-200 cursor-pointer">
                       <Link key={item._id} href={`/${item._id}`}>

            <h3 className="font-medium mb-2 text-xl">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.content}
            </p>
            <div className="flex items-center mt-4 flex-row justify-between">
            <div className=' flex flex-row items-center justify-between'>
                      <div className="flex items-center">
                      <UserPen className="h-6 w-6 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          By <span className="font-semibold">{item.author?.replaceAll("null", "")}</span>
                        </span>
                      </div>
            </div>
            <div>
                        <span className="text-xs text-muted-foreground">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                        </span>
                      </div>
            </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  </div>
  )
}

export default TopRated

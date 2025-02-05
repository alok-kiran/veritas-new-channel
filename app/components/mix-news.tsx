'use client';
import React from 'react'
import { Card } from './ui/card'
import { UserPen } from 'lucide-react';
import { NewsArticle } from './features-news';

function MixNews() {

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  console.log(loading);
  React.useEffect(() => {
    setLoading(true);
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data.news)).finally(() => setLoading(false));
  }, []);

  return (
  <>
    {news.slice(1,5).map((item: NewsArticle) => (
    <Card key={item.id} className="p-4 hover-scale transition-all duration-200 cursor-pointer flex flex-col justify-between ">
      <div>
      <h3 className="font-medium mb-2 text-xl">
      {item.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3">
      {item.content}
      </p>
      </div>
      <div className="flex items-center mt-2 justify-between">
      <div className='flex flex-row items-center'>
        <UserPen className="h-6 w-6 mr-2 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
        By <span className="font-semibold">{item.author?.replaceAll("null", "")}</span>
        </span>
      </div>
      <span className="text-xs text-muted-foreground">
        {new Date(item.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        })}
      </span>
      </div>
    </Card>
    ))}
  </>
  )
}

export default MixNews;

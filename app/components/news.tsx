'use client';

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { formatDistanceToNow } from "date-fns";
import { NewspaperIcon } from "lucide-react";
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

interface NewsArticle {
    id: string;
    title: string;
    content: string;
    tags: string[];
    author: string;
    authorEmail: string;
    createdAt: string;
    updatedAt: string;
  }


function News() {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch('/api/news')
            .then(response => response.json())
            .then(data => setNews(data.news)).finally(() => setLoading(false));
    }, []);

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex items-center justify-center mb-8">
      <NewspaperIcon className="h-8 w-8 mr-2 text-primary" />
      <h1 className="text-3xl font-bold text-center text-primary">Latest News</h1>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {loading && <p>Loading...</p>}
      {news?.map((article: NewsArticle) => (
        <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="line-clamp-2">{article.title}</CardTitle>
            <CardDescription className="flex items-center justify-between">
              <span>{article.author}</span>
              <span className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(article.createdAt), { addSuffix: true })}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] w-full rounded-md">
              <p className="text-sm text-muted-foreground mb-4">
                {article.content}
              </p>
            </ScrollArea>
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  )
}

export default News

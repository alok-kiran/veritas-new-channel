'use client';
import React from 'react'
import { NewsArticle } from './features-news';

function LatestNews() {
       const [news, setNews] = React.useState([]);
    
        React.useEffect(() => {
            fetch('/api/news')
                .then(response => response.json())
                .then(data => setNews(data.news));
        }, []);
  return (
    <>
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
            <div className="space-y-4">
              {news.slice(2,7).map((item: NewsArticle, index: number) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-4 border-b hover-scale transition-all duration-200 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <p className="text-sm block mb-1 uppercase font-medium text-red-600">
                      {item.category}
                    </p>
                    <p className="text-sm">
                        {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
    </>
  )
}

export default LatestNews

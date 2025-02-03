import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar";
import FeaturedNews from "./components/features-news";
import MixNews from "./components/mix-news";
import TopRated from "./components/top-rated";
import LatestNews from "./components/latest-news";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <TopRated />
          <div className="lg:col-span-6">
            <FeaturedNews />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <MixNews />
            </div>
          </div>
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <LatestNews />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

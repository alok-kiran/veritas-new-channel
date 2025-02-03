import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const NavBar = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return (
        <div className="border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center animate-fade-in">
          <span className="text-sm text-muted-foreground">{currentDate}</span>
          <div className="flex gap-4 items-center">
            <ThemeToggle />
            <Button size="sm" className="bg-red-600 hover:bg-red-700 hover-scale">
              SUBSCRIBE
            </Button>
          </div>
        </div>
        </div>
      )
}

export default NavBar;
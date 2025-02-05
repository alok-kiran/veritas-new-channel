'use client';
import { useState } from "react";
import { toast } from 'sonner';
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleSubscribe = () => {
    // Fake success
    if(!email) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("You have successfully subscribed!");
    setIsModalOpen(false);
  };

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center animate-fade-in">
        <span className="text-sm text-muted-foreground">{currentDate}</span>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-red-600 hover:bg-red-700 hover-scale"
            onClick={() => setIsModalOpen(true)}
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>

      <Dialog 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        aria-label="Subscribe to our newsletter"
        >
        <DialogContent className="p-4 max-w-md rounded-lg dark:bg-card">
          <DialogHeader className="flex items-center justify-between">
            <DialogTitle>Subscribe to our newsletter</DialogTitle>
          </DialogHeader>
          <div className="items-center gap-4">
            <Input
              type="email"
              required={true}
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" onClick={handleSubscribe}>Subscribe Now</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBar;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 animate-fade-in">
      <div className="glass-card p-8 text-center max-w-md w-full animate-scale-in">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Az oldal nem található</p>
        <Link to="/">
          <Button size="lg" className="w-full">
            <Home size={18} className="mr-2" />
            Vissza a főoldalra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

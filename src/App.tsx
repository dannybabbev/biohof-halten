import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FleischAbHof from "./pages/FleischAbHof";
import UnsereTiere from "./pages/UnsereTiere";
import UeberUns from "./pages/UeberUns";
import Impressionen from "./pages/Impressionen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fleisch-ab-hof" element={<FleischAbHof />} />
          <Route path="/unsere-tiere" element={<UnsereTiere />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/impressionen" element={<Impressionen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./firebase";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import TraditionalMarketing from "./pages/TraditionalMarketing";
import Influencers from "./pages/Influencers";
import Freelancers from "./pages/Freelancers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import LeadCaptureSystem from "./components/lead-capture/LeadCaptureSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/traditional-marketing" element={<TraditionalMarketing />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <LeadCaptureSystem />
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

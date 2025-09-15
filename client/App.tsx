import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Servicos from "./pages/Servicos";
import Resultados from "./pages/Resultados";
import CursoseEventos from "./pages/cursos-e-eventos";
import Noticias from "./pages/noticias";
import TrabalheConosco from "./pages/trabalhe-conosco";
import Contato from "./pages/contato";
import DiagnosticoGlobal from "./pages/internasServiços/DiagnosticoGlobal";
import ImplementacaoControle from "./pages/internasServiços/implementacaoDeControle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/cursos-e-eventos" element={<CursoseEventos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos/diagnostico-global" element={<DiagnosticoGlobal />} />
          <Route path="/servicos/implementacao-de-controle" element={<ImplementacaoControle />} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

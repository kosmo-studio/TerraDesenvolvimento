import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Servicos from "./pages/servicos";
import Resultados from "./pages/resultados";
import CursoseEventos from "./pages/cursosEventos";
import Noticias from "./pages/noticias";
import TrabalheConosco from "./pages/trabalhe-conosco";
import Contato from "./pages/contato";
import DiagnosticoGlobal from "./pages/internasServiços/DiagnosticoGlobal";
import ImplementacaoControle from "./pages/internasServiços/ImplementacaoDeControle";
import PlanejamentoEstrategico from "./pages/internasServiços/PlanejamentoEstrategico";
import DesenvolvimentoGerencial from "./pages/internasServiços/DesenvolvimentoGerencial";
import Prg from "./pages/internasServiços/Prg";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/cursosEventos" element={<CursoseEventos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos/DiagnosticoGlobal" element={<DiagnosticoGlobal />} />
          <Route path="/servicos/ImplementaçãoDeControle" element={<ImplementacaoControle />} />
          <Route path="/servicos/PlanejamentoEstrategico" element={<PlanejamentoEstrategico />} />
          <Route path="/servicos/DesenvolvimentoGerencial" element={<DesenvolvimentoGerencial />} />
          <Route path="/servicos/ProgramaRecuperaçãoGerencial" element={<Prg />} />


          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

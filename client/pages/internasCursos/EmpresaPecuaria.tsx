import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from "@/components/interno/HeroSection";
import DivisorTerra from '@/components/interno/DivisorTerra';
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

// --- BANCO DE DADOS DE EVENTOS ---
// Adicione ou remova cidades aqui para atualizar a tela automaticamente
const listaEventosCursos = [
    {
    id: "CUIABÁ-MT",
    cidade: "CUIABÃ",
    estado: "MT",
    data: "26 e 27 de Março de 2026",
    local: "Hotel Paiaguás",
    imagem: "/images/BANNERvuiabaCapa1600X838.png",
    link: "/EmpresaPecuariaMT",
    status: "Inscrições Abertas"
  },
  {
    id: "GOIÂNIA-GO",
    cidade: "GOIÂNIA",
    estado: "GO",
    data: "11 e 10 de junho de 2025",
    local: "SHOPPING LOZÂNDES",
    imagem: "/images/GESTAOGOIANIA.jpeg",
    link: "/EmpresaPecuariaGO", // Rota específica que você já criou
    status: "Inscrições Abertas"
  },
  {
    id: "XINGUARA-PA",
    cidade: "XINGUARA",
    estado: "PA",
    data: "16 e 17 de junho de 2026",
    local: "SINDICATO RURAL SRX",
    imagem: "/images/GESTAOXINGUARA.jpeg",
    link: "/EmpresaPecuariaXG",
    status: "Inscrições Abertas"
  },
  
 
];

// --- COMPONENTE DE CARD ---
function EventCard({ evento }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={evento.imagem} 
          alt={`${evento.cidade} - ${evento.estado}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-terra-navy text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {evento.status}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-terra-navy mb-2">
          <MapPin size={18} className="mr-2 text-terra-beige" />
          <span className="font-lexend font-bold text-xl">{evento.cidade} - {evento.estado}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-6">
          <Calendar size={18} className="mr-2 text-terra-beige" />
          <span className="text-sm">{evento.data} • {evento.local}</span>
        </div>
    

        <Link to={evento.link}>
          <button className="w-full flex items-center justify-center gap-2 bg-terra-navy text-white py-3 rounded-xl font-bold hover:bg-terra-navy/90 transition-colors">
            VER DETALHES E PREÇOS
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function EmpresaPecuaria() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection
          backgroundImage="/images/BANNERCURSOGESTAO.jpeg"
          title=" "
          subtitle=" "
        />

        {/* Seção de Introdução do Método */}
        <section className="py-0 md:pt-24 z-20">
          <div className="container mx-auto pt-14 max-w-7xl text-center bg-white relative mt-[-20px] md:-mt-40 shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.1)] rounded-t-[3rem]">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-lexend text-terra-navy mb-8">
                  Onde estaremos <span className="text-terra-beige font-light">em breve?</span>
                </h2>
                <p className="text-lg md:text-xl text-terra-navy font-light leading-relaxed mb-12">
                  O Curso de Gestão da Empresa Pecuária percorre os principais polos produtivos do país. 
                  Encontre abaixo a sua cidade e garanta sua vaga nos lotes promocionais.
                </p>
              </div>
            </AnimatedSection>

            {/* Grid de Eventos */}
            <div className="container mx-auto px-6 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {listaEventosCursos.map((evento) => (
                  <AnimatedSection key={evento.id}>
                    <EventCard evento={evento} />
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <DivisorTerra />

            {/* Seção de Aviso de Interesse */}
            <section className="py-20 bg-gray-50 rounded-b-[3rem]">
              <AnimatedSection>
                <div className="max-w-3xl mx-auto px-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-terra-navy mb-6">
                    Não encontrou sua cidade?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Leve o curso para sua região ou participe de turmas online exclusivas para grupos. 
                    Nossa equipe está pronta para organizar uma edição personalizada.
                  </p>
                  <a 
                    href="https://wa.me/seunumerowhatsapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-700 transition-all"
                  >
                    FALAR COM UM CONSULTOR NO WHATSAPP
                  </a>
                </div>
              </AnimatedSection>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import { X, Calendar, Send, Loader2, MessageCircle, CheckCircle2 } from 'lucide-react';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    primeiro_nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cidade: '',
    observacao: ''
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (submitted) setTimeout(() => setSubmitted(false), 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Integração com sua API da Vercel (Igual ao componente do evento)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          origem: 'Lead - Botão Flutuante (FAQ)' // Diferencia a origem no e-mail
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ primeiro_nome: '', sobrenome: '', email: '', telefone: '', cidade: '', observacao: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao processar envio');
      }
    } catch (error: any) {
      console.error("Erro no envio:", error);
      alert("Falha ao enviar interesse: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-lexend">
      
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={togglePopup}
          className="group flex items-center bg-[#0B1B32] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(11,27,50,0.5)] transition-all duration-500 ease-in-out hover:pr-6 border-2 border-white"
        >
          <Calendar size={24} className="min-w-[24px]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium">
            Dúvidas sobre o Evento?
          </span>
        </button>
      )}

      {/* Janela do Pop-up */}
      {isOpen && (
        <div className="bg-white w-[350px] md:w-[420px] rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          
          {/* Header Institucional */}
          <div className="bg-[#0B1B32] p-8 text-center relative border-b-4 border-[#CC6633]">
            <button 
              onClick={togglePopup} 
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <img 
              src="images/encontroGestores.svg" 
              alt="Encontro com Gestores" 
              className="w-40 h-auto mx-auto"
            />
          </div>

          <div className="bg-[#FDFDFD] min-h-[400px] flex flex-col justify-center">
            {!submitted ? (
              <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                <p className="text-[#0B1B32] text-center text-[11px] font-black uppercase tracking-widest mb-2">
                  Tire suas dúvidas com nossa equipe
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <InputField name="primeiro_nome" placeholder="Nome" value={formData.primeiro_nome} onChange={handleChange} required />
                  <InputField name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} required />
                </div>

                <InputField name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />

                <div className="grid grid-cols-2 gap-3">
                  <InputField name="telefone" type="tel" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
                  <InputField name="cidade" placeholder="Cidade - UF" value={formData.cidade} onChange={handleChange} required />
                </div>

                <textarea
                  name="observacao"
                  value={formData.observacao}
                  onChange={handleChange}
                  placeholder="No que podemos ajudar?"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0B1B32] placeholder:text-gray-400 focus:border-[#CC6633] focus:ring-1 focus:ring-[#CC6633] outline-none resize-none transition-all"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B1B32] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl hover:bg-[#152946] active:scale-[0.98] disabled:opacity-50 uppercase text-[10px] tracking-[0.2em] border-b-4 border-[#CC6633]"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
                  {loading ? 'Transmitindo...' : 'Enviar Mensagem'}
                </button>
                
                <div className="flex justify-center items-center gap-2 text-[9px] text-gray-400 pt-2 uppercase font-bold tracking-tighter">
                  <MessageCircle size={12} className="text-[#CC6633]" />
                  Canal exclusivo de atendimento
                </div>
              </form>
            ) : (
              <div className="p-10 flex flex-col items-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
                  <CheckCircle2 size={40} className="text-green-500 animate-pulse" />
                </div>
                <h3 className="text-[#0B1B32] text-xl font-black uppercase italic tracking-tighter">Recebemos sua dúvida!</h3>
                <p className="text-gray-500 text-sm mt-3 mb-8 leading-relaxed">
                  Em breve um de nossos consultores entrará em contato com você.
                </p>
                <button
                  onClick={togglePopup}
                  className="px-10 py-3 bg-[#0B1B32] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Entendido
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de Input Atômico para manter o design consistente
const InputField = (props: any) => (
  <input
    {...props}
    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0B1B32] placeholder:text-gray-400 focus:border-[#CC6633] focus:ring-1 focus:ring-[#CC6633] outline-none transition-all"
  />
);

export default ContactPopup;
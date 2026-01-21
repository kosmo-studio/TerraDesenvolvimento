import React, { useState } from 'react';
import { X, Calendar, Send, Loader2, MessageCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Estado para a tela de sucesso
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
    if (submitted) setTimeout(() => setSubmitted(false), 500); // Reseta após fechar
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('contatos')
      .insert([{ ...formData, origem: 'Popup Encontro Gestores' }]);

    setLoading(false);

    if (error) {
      alert('Erro ao enviar: ' + error.message);
    } else {
      setSubmitted(true); // Ativa a tela de sucesso
      setFormData({ primeiro_nome: '', sobrenome: '', email: '', telefone: '', cidade: '', observacao: '' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-lexend">
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={togglePopup}
          className="bg-[#0B1B32] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-3 border-2 border-white group"
        >
          <Calendar size={24} />
        </button>
      )}

      {/* Janela do Pop-up */}
      {isOpen && (
        <div className="bg-white w-[350px] md:w-[420px] rounded-t-3xl rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
          
          {/* Header */}
          <div className="bg-[#0B1B32] p-8 text-center relative border-b-4 border-[#b15425]">
            <button 
              onClick={togglePopup} 
              className="absolute top-4 right-4 text-white/60 hover:text-[#b15425] transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center">
              <img 
                src="images/encontroGestores.svg" 
                alt="Encontro com Gestores" 
                className="w-48 h-auto"
              />
            </div>
          </div>

          <div className="min-h-[400px] flex flex-col justify-center bg-[#F9F9F9]">
            {!submitted ? (
              /* Formulário */
              <form className="p-6 space-y-4 animate-in fade-in duration-500" onSubmit={handleSubmit}>
                <p className="text-[#0B1B32] text-center text-sm font-semibold mb-2">
                  Preencha os dados para tirar dúvidas:
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="primeiro_nome"
                    value={formData.primeiro_nome}
                    onChange={handleChange}
                    placeholder="Nome *"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#b15425] focus:ring-1 focus:ring-[#b15425] outline-none transition-all"
                    required
                  />
                  <input
                    name="sobrenome"
                    value={formData.sobrenome}
                    onChange={handleChange}
                    placeholder="Sobrenome *"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#b15425] focus:ring-1 focus:ring-[#b15425] outline-none transition-all"
                    required
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail *"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#b15425] focus:ring-1 focus:ring-[#b15425] outline-none transition-all"
                  required
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Telefone *"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#b15425] focus:ring-1 focus:ring-[#b15425] outline-none transition-all"
                    required
                  />
                  <input
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Cidade - UF *"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#b15425] focus:ring-1 focus:ring-[#b15425] outline-none transition-all"
                    required
                  />
                </div>

                <textarea
                  name="observacao"
                  value={formData.observacao}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  rows={2}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#b15425] focus:ring-1 focus:ring-[#b15425] outline-none resize-none transition-all"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B1B32] hover:bg-[#152946] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg uppercase text-xs tracking-widest border-b-4 border-[#b15425] active:border-b-0 active:translate-y-1 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} className="text-[#b15425]" />}
                  {loading ? 'Enviando...' : 'Confirmar Interesse'}
                </button>
                
                <div className="flex justify-center items-center gap-2 text-[10px] text-gray-400 pt-2 uppercase tracking-tighter">
                  <MessageCircle size={12} className="text-[#b15425]" />
                  Atendimento exclusivo para o Evento
                </div>
              </form>
            ) : (
              /* Tela de Sucesso Estilizada */
              <div className="p-10 flex flex-col items-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-green-600 animate-bounce" />
                </div>
                <h3 className="text-[#0B1B32] text-xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Obrigado pelo interesse. Em breve nossa equipe entrará em contato para mais detalhes sobre o Encontro com Gestores.
                </p>
                <button
                  onClick={togglePopup}
                  className="px-8 py-2 bg-[#0B1B32] text-white rounded-full text-sm font-semibold hover:bg-[#152946] transition-colors"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
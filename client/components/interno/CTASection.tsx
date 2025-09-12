import React, { useState } from 'react';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <section className="w-[1030px] h-[149px] shrink-0 absolute left-[452px] top-[3282px] max-md:w-[90%] max-md:relative max-md:h-auto max-md:left-[5%] max-md:top-[2000px] max-sm:w-[95%] max-sm:left-[2.5%] max-sm:top-[1400px]">
      <h2 className="text-[#162946] text-[62px] font-semibold leading-[62px] tracking-[-0.949px] absolute w-[1030px] h-[62px] left-0 top-0 max-md:w-full max-md:text-5xl max-md:leading-[56px] max-md:h-auto max-sm:text-[32px] max-sm:leading-[38px]">
        <span className="font-normal">Seja você também um cliente</span>
        <span className="font-bold"> Terra!</span>
      </h2>
      
      <div className="mt-20 max-md:mt-16 max-sm:mt-12">
        <button
          className="inline-flex items-center gap-3 bg-[#152A43] text-white px-8 py-4 rounded-lg hover:bg-[#1a3050] transition-colors duration-200"
          onClick={() => {
            // You can add modal or navigation logic here
            window.open('https://wa.me/5511999999999', '_blank');
          }}
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M69.9671 30.6401C69.4558 30.31 68.7656 29.9509 68.1343 30.2204C67.7957 30.3471 67.5468 30.7572 67.3239 31.1243C67.2305 31.2781 67.1417 31.4244 67.0528 31.5392C66.8727 31.7488 66.6925 31.7783 66.4524 31.6591C64.6496 30.9401 63.268 29.7413 62.2765 28.0924C62.0965 27.8533 62.1264 27.6436 62.3366 27.4027C62.3777 27.3535 62.4206 27.3036 62.464 27.2531C62.7377 26.9348 63.0361 26.5879 63.0879 26.1738C63.1779 25.6948 62.9678 25.1548 62.7567 24.7351C62.7346 24.6855 62.7119 24.6339 62.6887 24.5807C62.4593 24.0571 62.1668 23.3894 61.6762 23.1173C61.195 22.8468 60.5337 22.9976 60.0835 23.357C59.3321 23.986 58.9419 24.9452 58.972 25.9046C58.972 26.2039 59.002 26.4739 59.062 26.7438C59.2121 27.3729 59.5132 27.9725 59.8434 28.5427C60.0526 28.9081 60.3076 29.2738 60.5491 29.6202C60.5847 29.6712 60.62 29.7218 60.6547 29.7718C61.6151 31.0601 62.8168 32.1996 64.1994 33.0688C64.8896 33.488 65.641 33.8472 66.4224 34.1166C66.52 34.1469 66.616 34.1775 66.711 34.2078C67.4642 34.4482 68.1485 34.6665 68.9756 34.5068C69.9671 34.3275 70.9286 33.7277 71.3187 32.768C71.4387 32.4986 71.4988 32.1996 71.4387 31.8998C71.2984 31.3382 70.5793 30.9612 70.0694 30.6939C70.0342 30.6754 70.0001 30.6575 69.9671 30.6401Z\" fill=\"#37BC69\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.9256 35.0457L52.0627 42.0006L59.062 40.1418C60.9548 41.1614 63.0579 41.6998 65.1908 41.6998C72.2802 41.6998 78.0779 35.9153 78.0779 28.8422C78.0779 21.7679 72.2802 15.9834 65.1908 15.9834C58.1005 15.9834 52.3028 21.7679 52.3028 28.8422C52.3028 31 52.874 33.1585 53.9256 35.0457ZM59.8733 37.7742L59.4222 37.5348L55.4874 38.5829L56.5389 34.6866L56.2687 34.2376C55.2772 32.618 54.736 30.7297 54.736 28.8422C54.736 23.087 59.4222 18.4109 65.1908 18.4109C70.9585 18.4109 75.6448 23.087 75.6448 28.8422C75.6448 34.5972 70.9585 39.2723 65.1908 39.2723C63.328 39.2723 61.4651 38.7637 59.8733 37.7742Z\" fill=\"#37BC69\"></path> </svg>",
              }}
            />
          </div>
          <span className="text-lg font-medium">TRANSFORME SUA PRODUÇÃO</span>
        </button>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-md:mt-8 max-sm:mt-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-[#162946] text-xl font-semibold mb-4">Entre em contato</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#162946] mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#152A43]"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#162946] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#152A43]"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#162946] mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#152A43]"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#162946] mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#152A43]"
                placeholder="Como podemos ajudar sua fazenda?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#152A43] text-white py-2 px-4 rounded-md hover:bg-[#1a3050] transition-colors duration-200"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTASection;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-[2204px] h-[1038px] shrink-0 absolute left-[-53px] top-[3608px] max-md:w-full max-md:h-auto max-md:relative max-md:left-0 max-md:top-auto max-sm:h-[300px]">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"238:328\" width=\"1920\" height=\"618\" viewBox=\"0 0 1920 618\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"footer-bg\" style=\"width: 2204px; height: 1027px; flex-shrink: 0; fill: #F2F2F2; position: absolute; left: 0px; top: 11px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-53 0H2151V1027H-53V0Z\" fill=\"#F2F2F2\"></path> </svg>",
          }}
        />
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1dc0e421fb542157345566eb655b51551eeeba87?width=3840"
        alt="Footer background"
        className="w-[1920px] h-[622px] shrink-0 mix-blend-multiply absolute left-[53px] top-0 max-md:w-full max-md:h-[300px] max-md:left-0 max-sm:h-[250px]"
      />
      
      <div className="absolute left-[53px] top-[200px] max-md:left-[5%] max-md:top-[100px] max-sm:left-[2.5%] max-sm:top-[80px]">
        <div className="text-[#162946] max-md:text-center">
          <h3 className="text-2xl font-bold mb-4">Terra Desenvolvimento</h3>
          <p className="text-lg mb-2">Consultoria Agrícola Especializada</p>
          <p className="text-base mb-4">Transformando potencial em resultado real</p>
          
          <div className="space-y-2">
            <p className="text-sm">📧 contato@terradesenvolvimento.com.br</p>
            <p className="text-sm">📱 (11) 99999-9999</p>
            <p className="text-sm">📍 São Paulo, SP</p>
          </div>
          
          <div className="mt-6">
            <p className="text-xs text-gray-600">
              © 2024 Terra Desenvolvimento. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { MessageSquare, Shield, Heart, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 pt-20 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          {/* Logo + descrição */}
          <div className="mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7A9EBF] to-[#F7CAC9] mr-2 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#7A9EBF] to-[#F7CAC9]" />
                </div>
              </div>
              <span className="text-xl font-light text-[#1D3557]">eco</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Inteligência emocional que entende a essência por trás das suas palavras.
            </p>

            {/* Redes sociais */}
<div className="mt-6 flex space-x-3">
  {[
  {
    href: '#',
    d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.6 0c-2.5 0-4.51 2.28-3.95 4.7A12.94 12.94 0 0 1 3 1.6a4.48 4.48 0 0 0-.61 2.27c0 1.57.8 2.96 2 3.77a4.48 4.48 0 0 1-2-.55v.06a4.53 4.53 0 0 0 3.6 4.44 4.52 4.52 0 0 1-2 .08 4.5 4.5 0 0 0 4.2 3.13A9.06 9.06 0 0 1 1 19.54a12.8 12.8 0 0 0 7 2.05c8.38 0 12.96-7.43 12.67-14.1A9.18 9.18 0 0 0 23 3z',
  },
  {
    href: '#',
    d: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.02c-3.338.725-4.033-1.61-4.033-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.81 1.304 3.495.997.107-.776.418-1.305.76-1.605-2.665-.3-5.467-1.33-5.467-5.933 0-1.31.465-2.38 1.235-3.22-.135-.3-.54-1.52.105-3.165 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.645.24 2.865.12 3.165.765.84 1.23 1.91 1.23 3.22 0 4.615-2.805 5.63-5.475 5.92.435.375.81 1.11.81 2.24v3.32c0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z',
  },
  {
    href: '#',
    d: 'M19.615 3.184C21.165 3.66 22.34 4.83 22.82 6.385 23.75 9.255 23.75 12 23.75 12s0 2.745-.93 5.615c-.48 1.555-1.655 2.725-3.205 3.2-2.87.93-9.615.93-9.615.93s-6.745 0-9.615-.93C1.655 20.34.48 19.17 0 17.615-.93 14.745-.93 12-.93 12s0-2.745.93-5.615C1.41 4.83 2.585 3.66 4.135 3.185 7.005 2.255 13.75 2.255 13.75 2.255s6.745 0 9.615.93zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z',
  },
].map((icon, idx) => (
    <a
      key={idx}
      href={icon.href}
      className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
    >
      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon.d} />
      </svg>
    </a>
  ))}
</div>

          </div>

          {/* Menus */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Produto',
                items: ['Versão Beta', 'Funcionalidades', 'Roadmap', 'Preços'],
              },
              {
                title: 'Suporte',
                items: ['FAQ', 'Contato', 'Documentação', 'Tutoriais'],
              },
              {
                title: 'Empresa',
                items: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa'],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-[#1D3557] font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-[#7A9EBF] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Base inferior */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} ECO. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            {['Termos de Serviço', 'Privacidade', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#7A9EBF] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

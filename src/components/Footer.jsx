import React from 'react';
import { Bot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center items-center mb-4">
          <Bot size={24} className="text-primary mr-2" />
          <p className="text-lg font-semibold">NewTech IA Gestão de Chamados</p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} NewTech. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Automatize seu suporte, otimize seu tempo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Monitor, Tablet } from 'lucide-react';

const prototypesData = [
  {
    id: 1,
    platform: "Dashboard Principal",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Visão geral do sistema com gráficos e chamados recentes.",
    altText: "Dashboard principal do NewTech com gráficos de chamados resolvidos vs. pendentes e lista de últimos chamados.",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/b5df6181-3fa3-4de4-bdc9-55249a4f562e/0f5c4e735568b02e32393f8cad18852d.jpg"
  },
  {
    id: 2,
    platform: "Gestão de Técnicos",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Tela para gerenciar técnicos, suas especialidades e ações.",
    altText: "Tela de gerenciamento de técnicos no NewTech, listando técnicos com opções de editar e excluir.",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/b5df6181-3fa3-4de4-bdc9-55249a4f562e/437c80e195870bd96f4c49d406162dbd.png"
  },
  {
    id: 3,
    platform: "Interface Mobile do Usuário",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    description: "App mobile para usuários acompanharem e abrirem chamados.",
    altText: "Interface do aplicativo móvel NewTech para usuários, mostrando categorias e chamados recentes.",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/b5df6181-3fa3-4de4-bdc9-55249a4f562e/1acb1525f9427c3033c4c6ba8bbb6a76.jpg"
  },
  {
    id: 4,
    platform: "Suporte ao Colaborador (Web)",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Plataforma web para colaboradores abrirem e gerenciarem chamados.",
    altText: "Tela de suporte ao colaborador do NewTech, com opções de novo chamado, categorias e chamados recentes.",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/b5df6181-3fa3-4de4-bdc9-55249a4f562e/d96119291afaa47b9f5ebff3a4afb93f.jpg"
  },
  {
    id: 5,
    platform: "Tela de Login",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Interface de login para acesso seguro ao sistema TecSystem.",
    altText: "Tela de login do sistema TecSystem com campos para email, senha e botão de entrar.",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/b5df6181-3fa3-4de4-bdc9-55249a4f562e/1fd5762c5153d8170439d22bca88fd78.png"
  },
  {
    id: 6,
    platform: "Visualização em Tablet",
    icon: <Tablet className="h-12 w-12 text-primary" />,
    description: "Design responsivo garante visualização otimizada em dispositivos tablet.",
    altText: "Captura de tela da interface NewTech em um dispositivo tablet, mostrando o dashboard.",
    imagePlaceholderText: "NewTech - Visualização Responsiva em Tablet",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/b5df6181-3fa3-4de4-bdc9-55249a4f562e/0f5c4e735568b02e32393f8cad18852d.jpg" 
  }
];

const PrototypesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-primary mb-4">Galeria de Interfaces</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Uma prévia da experiência do usuário NewTech em diferentes plataformas.
        </motion.p>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {prototypesData.map((proto) => (
          <motion.div key={proto.id} variants={itemVariants}>
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden group">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {proto.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">{proto.platform}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="aspect-[4/3] bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-muted">
                  {proto.imageUrl ? (
                    <img
                      src={proto.imageUrl}
                      alt={proto.altText}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img  alt={proto.altText} src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" />
                  )}
                </div>
                <p className="text-muted-foreground">{proto.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PrototypesPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Brain, ListChecks, Search, BarChart2, Users, ShieldCheck, FileText } from 'lucide-react';

const featuresData = [
  {
    icon: <Ticket className="h-10 w-10 text-primary" />,
    title: "Envio de Chamados",
    description: "Interface amigável para envio fácil e rápido de chamados de suporte por múltiplos canais.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Triagem Inteligente com IA",
    description: "Sistema inteligente prioriza e encaminha chamados automaticamente com base na urgência e impacto.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "Categorização Automática de Chamados",
    description: "Algoritmos de IA analisam o conteúdo do chamado para categorizar problemas com precisão para um tratamento eficiente.",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Soluções Sugeridas da Base de Conhecimento",
    description: "IA sugere proativamente soluções relevantes da base de conhecimento para usuários e técnicos.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Rastreamento de Chamados e Atualizações de Status",
    description: "Acompanhamento em tempo real do progresso do chamado e notificações automáticas de status para os usuários.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Dashboards para Admin e Técnicos",
    description: "Painéis personalizáveis fornecendo métricas e insights chave para administradores e equipe de suporte.",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-primary" />,
    title: "Geração de Relatórios",
    description: "Ferramentas de relatório abrangentes para analisar desempenho, tendências e áreas de melhoria.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Acesso Multiplataforma e Segurança",
    description: "Acesse o sistema com segurança pela web, mobile ou desktop, com proteção robusta de dados.",
  }
];

const FeaturesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 } 
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
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-primary mb-4">Funcionalidades Principais</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore as poderosas capacidades que a NewTech oferece para otimizar suas operações de gestão de chamados e aprimorar o suporte ao usuário.
        </motion.p>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {featuresData.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-l-4 border-primary bg-card">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FeaturesPage;
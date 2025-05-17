import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Target, Cpu, Database, Layers, Brain } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const technologies = [
    { name: "ASP.NET & C#", icon: <Layers className="h-8 w-8 text-primary" />, description: "Framework backend robusto para lógica de aplicação escalável e segura." },
    { name: "API OpenAI", icon: <Brain className="h-8 w-8 text-primary" />, description: "Capacidades de IA de ponta para análise inteligente e sugestões automatizadas." },
    { name: "React & React Native", icon: <Cpu className="h-8 w-8 text-primary" />, description: "Bibliotecas JavaScript modernas para interfaces web dinâmicas e móveis nativas." },
    { name: "MS SQL Server", icon: <Database className="h-8 w-8 text-primary" />, description: "Banco de dados confiável e de alto desempenho para armazenamento e gerenciamento seguro de dados." },
  ];

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
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-primary mb-4">Sobre a NewTech</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubra a visão, missão e tecnologia por trás do nosso Sistema de Gestão de Help Desk com Inteligência Artificial.
        </motion.p>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-10 text-center">O Problema que Resolvemos</motion.h2>
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center text-3xl text-primary">
                <Lightbulb className="h-10 w-10 mr-3" />
                Enfrentando as Ineficiências do Help Desk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground/90 space-y-4 p-8">
              <p>Sistemas de help desk tradicionais frequentemente lutam com processamento manual de tickets, tempos de resposta lentos e qualidade de suporte inconsistente. Isso leva a usuários frustrados, agentes de suporte sobrecarregados e falta de insights acionáveis para a gerência.</p>
              <p>A NewTech enfrenta esses desafios de frente, introduzindo automação inteligente, triagem otimizada e insights orientados por IA para criar um ecossistema de suporte mais eficiente, responsivo e amigável.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-10 text-center">Nossos Objetivos</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-primary">
                  <Target className="h-8 w-8 mr-3" /> Objetivo Principal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Fornecer uma solução de help desk abrangente e aprimorada por IA que melhore significativamente a eficiência do suporte, reduza custos operacionais e aumente a satisfação do usuário por meio de automação inteligente e insights baseados em dados.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-primary">
                  <Cpu className="h-8 w-8 mr-3" /> Objetivos Específicos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Automatizar a categorização e priorização de tickets usando IA.</li>
                  <li>Fornecer soluções sugeridas por IA para agilizar a resolução de problemas.</li>
                  <li>Oferecer análises e relatórios poderosos para tomada de decisão informada.</li>
                  <li>Garantir acesso multiplataforma contínuo para usuários e técnicos.</li>
                  <li>Manter altos padrões de segurança de dados e conformidade com a LGPD.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-10 text-center">Tecnologias da NewTech</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow h-full border-t-4 border-primary">
                <CardHeader className="items-center">
                  {tech.icon}
                  <CardTitle className="mt-3 text-xl">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  {tech.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-foreground mb-10 text-center">O Papel da IA (OpenAI)</motion.h2>
        <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-3xl text-primary">
              <Brain className="h-10 w-10 mr-3" /> Automação Inteligente
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/90 space-y-4 p-8">
            <p>A Inteligência Artificial, especificamente através da API OpenAI, está no cerne das capacidades inteligentes da NewTech. Não é apenas uma palavra da moda para nós; é um componente fundamental que impulsiona melhorias no mundo real.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Processamento de Linguagem Natural:</strong> A IA analisa os tickets recebidos, compreendendo a intenção do usuário, o sentimento e os principais problemas descritos em linguagem natural.</li>
              <li><strong>Triagem e Categorização Inteligentes:</strong> Com base nessa análise, a IA categoriza automaticamente os tickets, atribui níveis de prioridade e os encaminha para as equipes ou agentes de suporte apropriados.</li>
              <li><strong>Sugestões de Soluções Automatizadas:</strong> Ao cruzar problemas com uma base de conhecimento em evolução, a IA sugere proativamente soluções relevantes para usuários e técnicos, acelerando significativamente os tempos de resolução.</li>
              <li><strong>Reconhecimento de Padrões:</strong> A IA identifica problemas e tendências recorrentes, fornecendo insights valiosos para o gerenciamento proativo de problemas e melhoria do serviço.</li>
            </ul>
            <p>Essa camada inteligente permite que a NewTech automatize tarefas repetitivas, capacite a equipe de suporte com informações acionáveis e, em última análise, ofereça uma experiência de suporte mais rápida, precisa e personalizada.</p>
          </CardContent>
        </Card>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
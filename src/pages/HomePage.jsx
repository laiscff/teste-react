import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const benefits = [
    "Categorização Automática de Chamados",
    "Triagem Inteligente para Priorização",
    "Relatórios Gerenciais Perspicazes",
    "Acessibilidade Multiplataforma",
    "Segurança Robusta de Dados",
    "Conformidade com LGPD Assegurada"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            >
              NewTech – Sistema de Gestão de Chamados com IA
            </motion.h1>
            <motion.p 
              variants={itemVariants} 
              className="text-2xl sm:text-3xl lg:text-4xl text-primary-foreground/90 mb-12"
            >
              "Automatize seu suporte, otimize seu tempo."
            </motion.p>
            <motion.div variants={itemVariants} className="space-x-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 rounded-lg font-semibold shadow-xl transition-transform hover:scale-105">
                <Link to="/features">Descubra as Funcionalidades <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-lg font-semibold shadow-xl transition-transform hover:scale-105">
                <Link to="/about">Saiba Mais</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center text-foreground mb-8">
                Transforme Sua Experiência de Suporte
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
                NewTech revoluciona a gestão de chamados utilizando o poder da Inteligência Artificial.
                Otimize suas operações, aumente a produtividade dos agentes e ofereça um atendimento excepcional ao cliente.
              </motion.p>
            
              <motion.div 
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-primary"
                  >
                    <CheckCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{benefit}</h3>
                    <p className="text-muted-foreground">
                      Experimente uma eficiência nunca antes vista com nossa {benefit.toLowerCase().replace("tickets", "chamados")} impulsionada por IA.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 lg:py-24 bg-secondary">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <motion.h2 
                variants={itemVariants} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-4xl font-bold text-foreground mb-8"
              >
                Pronto para Elevar seu Sistema de Chamados?
              </motion.h2>
              <motion.p 
                variants={itemVariants} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
              >
                Junte-se às empresas líderes que confiam na NewTech para automatizar e otimizar suas operações de suporte.
              </motion.p>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 rounded-lg font-semibold shadow-xl transition-transform hover:scale-105">
                  <Link to="/contact">Solicite uma Demonstração <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </motion.div>
           </div>
        </section>

      </main>
    </motion.div>
  );
};

export default HomePage;
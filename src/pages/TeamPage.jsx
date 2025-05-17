import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';


const teamMembers = [
  
  { name: "BRUNA SILVA", studentId: "R101BH8", role: "Documentação / Manual de Uso" },
  { name: "GABRIEL PASSOS", studentId: "G893018", role: "Desenvolvedor Backend" },
  { name: "KAILANE BARBOSA", studentId: "G896EB7", role: "Levantamento de Requisitos" },
  { name: "LAIS COSTA", studentId: "G006II8", role: "Desenvolvedora Frontend UI/UX", photo: "/img/avatarlais.png" },
  { name: "LUCAS JESUS", studentId: "R075CI2", role: "Analista de Diagramas", photo: "/img/avatarlucasjesus.png" },
  { name: "LUCAS SOUSA", studentId: "G985834", role: "Testes / QA" },
  { name: "NATHAN DE SOUZA", studentId: "G8972D8", role: "Especialista LGPD / ANPD" },
  { name: "ROANY RAFAELA", studentId: "T477JC9", role: "Analista de Requisitos / Regras de Negócio", photo: "/img/avatarroany.png" },
  { name: "VITOR DE ARAGÃO", studentId: "G868366", role: "DBA / Modelagem de Dados" },
  { name: "VICTORIA INGRID", studentId: "R0460H2", role: "Líder de Projeto / Extensão Universitária" },
];


const TeamPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 10 }
    }
  };
  
  const imageVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9, rotate: -5 }
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
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-primary mb-4">Conheça a Equipe</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Os talentosos indivíduos por trás do Sistema de Gestão de Help Desk NewTech.
        </motion.p>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group bg-card border-t-4 border-primary">
              <CardHeader className="items-center pt-8">
                <motion.div 
                  className="p-1 bg-gradient-to-br from-primary to-blue-700 rounded-full inline-block mb-4"
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                   <div className="bg-background rounded-full p-2">
                    <img  
                      className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-md" 
                      alt={`Foto de ${member.name}`}
                      src={member.photo || "/img/avatarlais.png"}  />
                   </div>
                </motion.div>
                <CardTitle className="text-2xl font-bold text-foreground">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-muted-foreground">ID Estudantil: {member.studentId}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamPage;
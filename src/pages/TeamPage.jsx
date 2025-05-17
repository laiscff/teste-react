import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

const teamMembers = [
  { name: "Alice Maravilha", studentId: "S123456", role: "Líder de Projeto e Desenvolvedora Backend" },
  { name: "Bob Construtor", studentId: "S234567", role: "Desenvolvedor Frontend (React)" },
  { name: "Carlos Silva", studentId: "S345678", role: "Especialista em IA (Integração OpenAI)" },
  { name: "Diana Prince", studentId: "S456789", role: "Desenvolvedora Mobile (React Native)" },
  { name: "Eduardo MãosdeTesoura", studentId: "S567890", role: "Administrador de Banco de Dados e QA" },
  { name: "Fernanda Lima", studentId: "S678901", role: "Designer UI/UX" },
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
                     src="https://images.unsplash.com/photo-1635185481431-661b09594e6c" />
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
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simula chamada de API
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem Enviada (Simulação)",
        description: "Obrigado pela sua mensagem! Entraremos em contato em breve (isto é uma demonstração).",
        variant: "default",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.section variants={itemVariants} className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-primary mb-4">Entre em Contato</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Adoraríamos ouvir de você! Se você tem alguma dúvida sobre funcionalidades, testes ou qualquer outra coisa, nossa equipe está pronta para responder a todas as suas perguntas.
        </p>
      </motion.section>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-semibold text-foreground">Informações de Contato</h2>
          <p className="text-muted-foreground">
            Preencha o formulário e nossa equipe retornará em até 24 horas. Para consultas urgentes, por favor, utilize os detalhes de contato abaixo.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-foreground">Envie-nos um Email</h3>
                <a href="mailto:info@newtech.ai" className="text-muted-foreground hover:text-primary transition-colors">info@newtech.ai</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-foreground">Ligue para Nós</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">(123) 456-7890</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-foreground">Nosso Escritório</h3>
                <p className="text-muted-foreground">Avenida da Tecnologia 123, Cidade da Inovação, SP 01000-000</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="shadow-xl border-t-4 border-primary bg-card">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground">Envie-nos uma Mensagem</CardTitle>
              <CardDescription>Este formulário é apenas para fins de demonstração.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Nome Completo</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="João Silva" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg">Endereço de Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="voce@exemplo.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">Sua Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Como podemos te ajudar hoje?" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="mt-2 text-base"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
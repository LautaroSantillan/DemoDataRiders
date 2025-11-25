import React from 'react';
import '../styles/styles.css'; 
import LinkCard from './linkCard.jsx';
import CREDENCIAL from '../assets/credenciales.png';
import ROBOTIMG from '../assets/robotIA.jpg';
import ERRORIMG from '../assets/error-404.jpg';

const linksData = [
    { 
        url: "https://docs.google.com/spreadsheets/d/1Nz9NeWJLAWMZSiTuRY2tL-nuwYgO02eqCttDNcZvNwY/edit?gid=0#gid=0", 
        image: CREDENCIAL, 
        title: "Excel Base", 
        description: "Excel con todas las demos y keys (credenciales) para las distintas demos." 
    },
    { 
        url: "https://gmfftfm9mn.us-east-1.awsapprunner.com/", 
        image: ROBOTIMG, 
        title: "Call Center - STRIX", 
        description: "Call center inteligente para seguros que gestiona turnos, cobranzas y servicio técnico. Atiende llamadas, envía mails automáticos y resuelve consultas sin intervención humana." 
    },
    { 
        url: "https://ypaibrpmni.us-east-1.awsapprunner.com/", 
        image: ROBOTIMG,
        title: "Call Center - Contabilidad", 
        description: "Call center automatizado para estudios contables que responde consultas sobre impuestos, vencimientos y trámites frecuentes. Optimizado para contadores y pymes." 
    },
    { 
        url: "http://18.234.154.205:8501/", 
        image: ROBOTIMG, 
        title: "Agente de análisis de clientes - KANJI", 
        description: "Centraliza la gestión de correos: clasifica, responde y redacta mails automáticamente. Tambien puede buscar y resumir correos historicos." 
    },
    { 
        url: "http://18.234.154.205:8501/facturas", 
        image: ROBOTIMG, 
        title: "Agente de gestor de facturas", 
        description: "Procesa PDFs y documentos de facturación, estructurando la información en base de datos. Permite consultas y reportes directamente desde un chatbot conversacional." 
    },
    { 
        url: "http://18.234.154.205:8501/costos", 
        image: ROBOTIMG, 
        title: "DATI & KANJI", 
        description: "Control de Costos (DATI y KANJI WEB)." 
    },
    { 
        url: "http://18.234.154.205:8501/conversaciones_dati", 
        image: ROBOTIMG, 
        title: "DATI", 
        description: "Control de conversaciones DATI." 
    },
    { 
        url: "/", 
        image: ERRORIMG, 
        title: "Agente de gestor de mails", 
        description: "Procesa PDFs y documentos de facturación, estructurando la información en base de datos. Permite consultas y reportes directamente desde un chatbot conversacional." 
    },
    { 
        url: "/", 
        image: ERRORIMG, 
        title: "Agente - CAPITAL MARKET", 
        description: "Investiga noticias en tiempo real sobre mercados financieros y las combina con análisis histórico de datos. Genera gráficos y métricas clave para decisiones de inversión." 
    },
    { 
        url: "/", 
        image: ERRORIMG, 
        title: "Agente 'tu chatbot en 60 segundos!'", 
        description: "Permite crear una agente especializado a partir de pdfs, docuementos, o investigacion realtime, en menos de 1 minuto." 
    },
    { 
        url: "https://d7pssnu3pm.us-east-1.awsapprunner.com/redoc", 
        image: ERRORIMG, 
        title: "Custom Agent (redirige a FastAPI)", 
        description: "Es la version del Kanjibot que responde por Whatsapp. En el endpoint de costos se puede hacer el seguimiento de los costos." 
    },
];

const Links = () => {
    return (
        <div className="links-container">
            {linksData.map((link, index) => (
                <LinkCard 
                    key={index} 
                    url={link.url}
                    image={link.image}
                    title={link.title}
                    description={link.description}
                />
            ))}
        </div>
    );
};

export default Links;
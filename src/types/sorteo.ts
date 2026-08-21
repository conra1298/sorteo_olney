export interface Pack {
  id: string;
  nombre: string;
  badge?: string;
  popular?: boolean;
  precio: number;
  chances: number;
  cantidadFotos: number;
  descripcionCorta: string;
  caracteristicas: string[];
  imagen: string;
  zipFileName: string;
}

export interface BankData {
  alias: string;
  titular: string;
  cuit: string;
  banco: string;
  tipoCuenta: string;
}

export interface PrizeInfo {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagen: string;
  items: string[];
  fechaSorteo: string;
  mecanismo: string;
  alcance: string;
  basesUrl?: string;
}

export interface SorteoConfig {
  activo: boolean;
  empresa: {
    nombre: string;
    razonSocial: string;
    cuit: string;
    direccion: string;
    ciudad: string;
    instagram: string;
    instagramHandle: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
  };
  banco: BankData;
  premio: PrizeInfo;
  packs: Pack[];
  gratis: {
    activa: boolean;
    chances: number;
    formularioUrl: string;
    whatsappMensaje: string;
    instrucciones: string;
  };
  faqs: {
    pregunta: string;
    respuesta: string;
  }[];
}

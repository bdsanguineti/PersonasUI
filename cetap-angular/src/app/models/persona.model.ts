export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    provinciaId: number;
    dni: string;
    telefono?: string;
    fechaAlta: Date;
    fechaModificacion?: Date;
    provincia?: {
      id: number;
      nombre: string;
    };
  }
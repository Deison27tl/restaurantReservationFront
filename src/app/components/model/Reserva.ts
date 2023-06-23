export class Reserva {
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  identificacion: string;
  email: string;
  fechaReserva: string;
  tipoReserva: string;
  cantidadPersonas: number;
  observaciones: string;
  estado: string;

  constructor(
    nombres: string,
    apellidos: string,
    tipoDocumento: string,
    identificacion: string,
    email: string,
    fechaReserva: string,
    tipoReserva: string,
    cantidadPersonas: number,
    observaciones: string,
    estado: string
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.tipoDocumento = tipoDocumento;
    this.identificacion = identificacion;
    this.email = email;
    this.fechaReserva = fechaReserva;
    this.tipoReserva = tipoReserva;
    this.cantidadPersonas = cantidadPersonas;
    this.observaciones = observaciones;
    this.estado = estado;

  }
}

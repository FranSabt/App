
export class IPagomovil {
  monto_dolares: number;
  monto_bolivares: number;
  nombre_receptor: string | null;
  banco_receptor: string;
  ci_receptor: string;
  cel_receptor: string;
  factura: string | null;

  constructor(monto_dolares: number, monto_bolivares: number, nombre_receptor: string | null, banco_receptor: string, ci_receptor: string, cel_receptor: string, factura: string | null) {
    this.monto_dolares = monto_dolares;
    this.monto_bolivares = monto_bolivares;
    this.nombre_receptor = nombre_receptor;
    this.banco_receptor = banco_receptor;
    this.ci_receptor = ci_receptor;
    this.cel_receptor = cel_receptor;
    this.factura = factura;
  }
}


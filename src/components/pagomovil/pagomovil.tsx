// import { IPagomovil } from "./pagomovil.interface";
import { useState } from "react";

const Pagomovil = () => {
    const [pago, setPago] = useState({
        /**
         * Valores para realizar un vuelto.
         */
        factura: "",
        montoTransaccion: "", // En $
        identificadorPersona: "", // CI o PASAPORTE, no admite cliente juridico.
        telefonoCredito: "", // Telefono receptor (celular)
        bancoCredito: "", //Banco receptor del pago
        vendedor: credentials.id,
        sucursal: credentials.oficina, // Oficina asociada al usuario.
        concepto: "Vuelto a cliente Netcom"
        // Agrega aquí cualquier otro campo que necesites
      });
    
      /**
       * Chequeo de errores en los valores ingresados
       */
      const [errorID, setErrorID] = useState(false);
      const [errorTelefono, setErrorTelefono] = useState(false);
      const [errorMonto, setErrorMonto] = useState(false);
      const [errorFactura, setErrorFactura] = useState(false);
      const [errorBanco, setErrorBanco] = useState(true);
      
  return (
        <div>
            <h1>Pagomovil</h1>
            
        </div>
    );
};

export default Pagomovil;

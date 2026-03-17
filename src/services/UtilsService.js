class UtilsService {
    getCicloEscolar() {
        const hoy = new Date();
        const añoActual = hoy.getFullYear();
        const mesActual = hoy.getMonth(); // 0 = Enero, 7 = Agosto

        // Si estamos en Agosto (7) o después, el ciclo de inscripción "próximo" 
        // suele ser el del año siguiente. 
        // Pero normalmente, de Enero a Julio te inscribes para el ciclo que inicia en Agosto de ese mismo año.
        
        let añoInicio;
        
        // Si estamos antes de Agosto, el ciclo que se promociona es el del año pasado al actual
        if (mesActual < 7) {
            añoInicio = añoActual - 1;
        } else {
            // Si ya es Agosto o más tarde, se promociona el del próximo año
            añoInicio = añoActual + 1;
        }

        const añoFin = añoInicio + 1;
        return `${añoInicio}-${añoFin}`;
    }
}

export const utilsService = new UtilsService();
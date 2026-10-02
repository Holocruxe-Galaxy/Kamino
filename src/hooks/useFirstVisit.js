import { useState, useEffect } from "react";

export const useFirstVisit = () => {
  // Leemos si ya visitó en la sesión
  const [hasVisited] = useState(() => {
    try {
      return Boolean(sessionStorage.getItem("visited"));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Si es primera visita, registramos en sessionStorage para las próximas páginas/navegaciones,
    // manteniendo el estado inicial durante la primera carga (sin desmontar la animación de entrada)
    if (!hasVisited) {
      try {
        sessionStorage.setItem("visited", "true");
      } catch {
        // Storage no disponible o bloqueado por el navegador
      }
    }
  }, [hasVisited]);

  return hasVisited;
};

export default useFirstVisit;

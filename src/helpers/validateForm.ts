type FormDataFields = {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    phone: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
  };
  
  export const validateFormFields = (data: FormDataFields) => {
    const errors: string[] = [];
  
    // Validar nombre: requerido + solo letras
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
      errors.push("El nombre es obligatorio.");
    } else if (!nameRegex.test(data.name.trim())) {
      errors.push("El nombre solo debe contener letras.");
    }
  
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || typeof data.email !== "string" || !emailRegex.test(data.email)) {
      errors.push("El correo electrónico no es válido.");
    }
  
    // Validar teléfono (opcional)
    const phoneRegex = /^\+?[0-9\s()-]{6,20}$/;
    if (data.phone && typeof data.phone === "string" && data.phone.trim() !== "") {
      if (!phoneRegex.test(data.phone.trim())) {
        errors.push("El teléfono no es válido.");
      }
    }

    // Validar mensaje
    if (!data.message || typeof data.message !== "string" || data.message.trim() === "") {
      errors.push("El mensaje es obligatorio.");
    } else if (data.message.trim().length > 1000) {
      errors.push("El mensaje debe tener como máximo 1000 caracteres.");
    }

    return errors;
  };
  
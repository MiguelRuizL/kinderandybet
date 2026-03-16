import emailjs from '@emailjs/browser';

class ContactService {
    constructor() {
        this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    }

    /**
     * Envía el formulario usando EmailJS
     * @param {HTMLFormElement} formElement - El elemento <form> del DOM
     */
    async sendMail(formElement) {
        try {
            const response = await emailjs.sendForm(
                this.serviceId,
                this.templateId,
                formElement,
                this.publicKey
            );
            return response;
        } catch (error) {
            // Podemos centralizar el manejo de errores aquí
            console.error("Error en ContactService:", error);
            throw error; 
        }
    }
}

export const contactService = new ContactService();
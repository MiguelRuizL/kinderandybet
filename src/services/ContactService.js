import emailjs from '@emailjs/browser';

class ContactService {
    constructor() {
        this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        this.address = import.meta.env.VITE_CONTACT_ADDRESS || "";
        this.email = import.meta.env.VITE_CONTACT_EMAIL || "";
        this.phone = import.meta.env.VITE_CONTACT_PHONE || "";
        this.hours = import.meta.env.VITE_CONTACT_HOURS || "";
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

    getContactInfo() {
        return {
            address: this.address,
            email: this.email,
            phone: this.phone,
            hours: this.hours,
        };
    }
}

export const contactService = new ContactService();
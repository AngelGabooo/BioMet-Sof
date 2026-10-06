// TODO: reemplaza por el número real de BioMey (formato internacional, sin + ni espacios)
export const WHATSAPP_NUMBER = '523349812319';

const DEFAULT_MESSAGE =
  'Hola BioMey 👋, me gustaría solicitar una cotización para un proyecto.';

export function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
}
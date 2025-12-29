export function makeWhatsAppLink(number: string, message: string) {
  const text = encodeURIComponent(message);
  const phone = number.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}

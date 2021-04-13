export function phoneValidator(phone) {
  const re = /\+/g
  if (!phone || phone.length <= 0) return "Le numéro de téléphone de peut pas être vide."
  if ((re).test(phone)) return 'Merci de renseigner le numéro sans indicatif.'
  if (!phone || phone.length > 10) return "Ce numéro n'est pas valide."
  return ''
}

export function phoneValidator(phone) {
  const re = /\+/g
  const re2 = /\^+D/g
  if (!phone || phone.length <= 0) return "Le numéro de téléphone de peut pas être vide."
  if ((re2).test(phone)) return 'Merci de renseigner uniquement le numéro.'
  if ((re).test(phone)) return 'Merci de renseigner le numéro sans indicatif.'
  if (!phone || phone.length > 10) return "Ce numéro n'est pas valide."
  return ''
}

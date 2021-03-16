export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email || email.length <= 0) return "L'adresse email ne peut être vide."
  if (!re.test(email)) return 'Ooops! L\'adresse email n\'est pas valide.'
  return ''
}

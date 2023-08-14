export const unit8ToArray = (unitString: string) => {
  const splitted = unitString.split('}')
  const addedBracket = splitted.map((item) => item + '}')
  const parsed: { status: string; value: string }[] = addedBracket
    .slice(0, addedBracket.length - 1)
    .map((item) => JSON.parse(item))

  let string = ''

  parsed.forEach((data) => (string += data.value))

  return string
}

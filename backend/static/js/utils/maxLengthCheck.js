export function maxLengthCheck(event) {
  const input = event.target;
  if (input.value.length > input.maxLength) {
    input.value = input.value.slice(0, input.maxLength);
  }
}


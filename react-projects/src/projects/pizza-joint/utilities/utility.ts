export function isInputElement(e: HTMLElement): e is HTMLInputElement {
  if ("value" in e) {
    return true;
  }
  return false
}

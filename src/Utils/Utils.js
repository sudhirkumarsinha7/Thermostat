export function renderEmptyStringIfUndefined(value) {
  if (value) {
    return value;
  } else {
    return '';
  }
}

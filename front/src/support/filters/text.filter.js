function truncating(value, truncate, truncateAt) {
  const aux = '...';
  if (value.length > (truncateAt - 3) && truncate) {
    return `${value.substring(0, truncateAt)}${aux}`;
  }
  return value;
}

export default truncating;

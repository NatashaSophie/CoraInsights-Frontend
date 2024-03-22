const birthdateMask = (str: string) => {
  let value = str;

  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  if (value.match(/^\d{2}$/) !== null) {
    value += '/';
  } else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
    value += '/';
  }

  return value;
};

export default birthdateMask;

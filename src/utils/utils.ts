export const isPlainObject = (value: any): boolean => {
  if (value === null || typeof value !== "object") {
    return false;
  }
  return Object.prototype.toString.call(value) === "[object Object]";
};

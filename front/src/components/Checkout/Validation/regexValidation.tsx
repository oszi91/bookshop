export const hasNumber = (txt: string) => /\d/.test(txt);
export const isValidZip = (txt: string) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(txt);
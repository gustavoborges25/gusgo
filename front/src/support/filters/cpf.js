/* eslint-disable import/prefer-default-export */
export function formataCpf(cpf) {
  if (!cpf || cpf.length !== 11) {
    return cpf;
  }

  return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9)}`;
}

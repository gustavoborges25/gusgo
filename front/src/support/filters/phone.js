/* eslint-disable import/prefer-default-export */
export function formataTelefone(valor) {
  if (!valor || (valor.length !== 10 && valor.length !== 11)) {
    return valor;
  }

  let telefone = '';
  telefone += '(';
  telefone += valor.substr(0, 2);
  telefone += ') ';

  if (valor.length === 10) {
    telefone += valor.substr(2, 4);
    telefone += '-';
    telefone += valor.substr(6, 4);
  } else if (valor.length === 11) {
    telefone += valor.substr(2, 1);
    telefone += ' ';
    telefone += valor.substr(3, 4);
    telefone += '-';
    telefone += valor.substr(7, 4);
  }

  return telefone;
}

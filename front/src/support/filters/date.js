import moment from 'moment';

export function formataData(date) {
  if (!date) {
    return null;
  }

  return moment(date, ['YYYY-MM-DD']).format('DD/MM/YYYY');
}

export function parseData(date) {
  if (!date) {
    return null;
  }

  return moment(date, ['DD/MM/YYYY']).format('YYYY-MM-DD');
}

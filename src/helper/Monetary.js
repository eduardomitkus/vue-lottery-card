export default (currency) => {
    return currency.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
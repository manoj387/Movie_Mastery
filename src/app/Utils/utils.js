export function ConvertMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = hours % 60;
    return `${hours}h  ${remainingMinutes}min`;
}


export function splitBudget(comma){
    const nf = new Intl.NumberFormat();
    const budget = nf.format(comma);
    return budget;
}
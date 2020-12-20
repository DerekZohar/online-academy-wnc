export const formatNumber = (num:number)=>{
    return String(num).replace(/(.)(?=(\d{3})+$)/g,'$1.')
}
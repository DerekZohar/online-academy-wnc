export const formatNumber = (num:number|null)=>{
    return String(num?.toFixed(2)).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
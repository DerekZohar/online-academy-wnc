

let setAll = (obj:any, val:any) => Object.keys(obj).forEach(k => obj[k] = val);
export let setNull = (obj:any) => setAll(obj, null);
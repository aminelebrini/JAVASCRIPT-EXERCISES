const ns = [1,2,2,3,4,5,5];
const ns1 = [];
ns.forEach((v)=>{
    if (!ns1.includes(v)) {
        ns1.push(v);
    }
});

console.log(ns1);

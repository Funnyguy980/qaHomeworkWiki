function discountCalc (senior: boolean, vet: boolean, members: boolean): number {
    if (senior && vet && members) return 0.25;
    if((senior && members) || (vet && members)) return 0.15
    if (senior || vet || members) return 0.10
    return 0
}

console.log("all three discounts works", discountCalc(true, true, true))
console.log("senior and member works", discountCalc(true, false, true))
console.log("vet works", discountCalc(false, true,true))
console.log("members work", discountCalc(false, false, true))
console.log("no discount works", discountCalc(false, false, false))
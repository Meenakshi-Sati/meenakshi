function FormatPrice({amount}){
return amount.toLocaleString(undefined,{
    style:"currency",
    currency:"USD"
})
}
export default FormatPrice
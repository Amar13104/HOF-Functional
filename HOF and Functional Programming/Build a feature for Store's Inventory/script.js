const itemlist = 
{
    "item1":10 , "item2":20 , "item3":30 , "item4":40 ,"item5":50 
}

const exrate = 80 ;

const convertedprice = Object.keys(itemlist).map((key) => {
    const price = itemlist[key]*exrate;
    return price ;
})

console.log(convertedprice);
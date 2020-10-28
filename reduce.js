// const friend =[
//     {name:'rashed', money:65},
//     {name:'iashed', money:75},
//     {name:'oashed', money:85},
//     {name:'mashed', money:95},
// ]
// const final = friend.reduce((sum, fri)=>sum+fri.money ,0);
// console.log(final);

const friend =[
    {name:'habu', mony:23},
    {name:'kabu', mony:230},
    {name:'hlabu', mony:213},
    {name:'mabu', mony:63}
]

const total = friend.reduce((sum, num)=> sum+num.mony, 0);
console.log(total)
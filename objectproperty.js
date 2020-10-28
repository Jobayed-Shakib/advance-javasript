const student =[
    {id:21, name:'abul'},
    {id:43, name:'babul'},
    {id:32, name:'kamrul'}
];

const names = student.map(s =>s.name);
const ids = student.filter(s => s.id<40);
 const bigger = student.find(s => s.id>30);


console.log( bigger);
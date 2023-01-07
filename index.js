// Higher order methods

// const employess = [
//   {id:1011, name: "Employe1",designation:"IT",start:1985,end:2020},
//   {id:1012, name: "Employe2",designation:"sales",start:1952,end:2020},
//   {id:1013, name: "Employe3",designation:"marketing",start:1983,end:2020},
//   {id:1014, name: "Employe4",designation:"HR",start:1987,end:2020},
//   {id:1015, name: "Employe5",designation:"IT",start:1985,end:2020},
//   {id:1016, name: "Employe6",designation:"sales",start:1986,end:2020},
//   {id:1017, name: "Employe7",designation:"marketing",start:1997,end:2020},
//   {id:1018, name: "Employe8",designation:"HR",start:1998,end:2020},
//   {id:1019, name: "Employe9",designation:"marketing",start:1989,end:2020},
//   {id:1020, name: "Employe10",designation:"IT",start:1998,end:2020}
//   ]
   
  // for(let employe=0; employe < employess.length; employe++){
  //   console.log(employess[employe].name);
  // }
  
  // foreach()
  // employess.forEach((person,index)=> console.log(index))


// map()

  // employess.map((person,index)=>console.log(`The name of the employe id with is name is ${person.id} and ${person.name} with index value is ${index}`))

  // employess.map((person)=>console.log(person.id))

  // filter()
 
  
  const company =[
    {id:1001,name:"sandesh",department:"production",post:"maneeger",start:2015,end:2021},
    {id:1001,name:"piyush",department:"electrical",post:"employe",start:2018,end:2021},
    {id:1001,name:"rahul",department:"IT",post:"supervisour",start:2012,end:2021},
    {id:1001,name:"shivam",department:"production",post:"junior engineer",start:2011,end:2021},
    {id:1001,name:"akashy",department:"IT",post:"accountant",start:2014,end:2021},
    {id:1001,name:"subash",department:"production",post:"supervisour",start:2017,end:2021},
    {id:1001,name:"mehul",department:"electrical",post:"junior engineer",start:2015,end:2021},
    {id:1001,name:"neha",department:"IT",post:"maneeger",start:2005,end:2021},
    {id:1001,name:"naina",department:"production",post:"employe",start:2015,end:2021},
    {id:1001,name:"shraddha",department:"electrical",post:"supervisour",start:2019,end:2021},
  ]

  // company.forEach((person)=>console.log(person.name));

  // company.map((person)=>console.log(`The name of the cpmapany enploy ${person.name} with id ${person.id} and post is ${person.post}`))

  // newcomapny = company.filter((person)=>(person.end - person.start >=8))
  // console.log(newcomapny);

 const  newsuperviousor =company.filter((person)=>person.department==="electrical").map((person)=>person.name)
 console.log(newsuperviousor);

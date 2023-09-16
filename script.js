const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i of data){
    console.log(i.name);
  }

}

// 2. Add Data
function addData() {
  let x = window.prompt();
  let arr = x.split(" ");
  data.push({
    name:arr[0],
    age:Number(arr[1]),
    profession:arr[2]
  });
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i = 0;i<data.length;i++){
    
    if(data[i].profession=='admin'){
      data.splice(i,1);
    }
  }
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 = [
    {name:"naveen" , age:22 , profession : "chef"},
    {name:"neena" , age:25 , profession : "architect"},
    {name:"varun" , age:29 , profession : "engineer"}
   
  ]
  const arr2 = data.concat(data2);
  console.log(arr2);


}

// 5. Average Age
function averageAge() {

 let tot = 0;
 for(let i of data){
  tot+=i.age;
 }
 console.log(tot/data.length);


}

// 6. Age Check
function checkAgeAbove25() {
  
  const output = data.filter((x)=>{
    return x.age > 25 ;
  });
  console.log(output.length >= 1);

}

// 7. Unique Professions
function uniqueProfessions() {
  

  const arr = [];
  data.forEach((item)=>{
    if(arr.indexOf(item.profession)==-1)arr.push(item.profession);
  })
  console.log(arr);
  

}

// 8. Sort by Age
function sortByAge() {
  data.sort((x,y)=>{
   return x.age - y.age;
  });
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    data.forEach((item)=>{
      if(item.name=='john')item.profession='manager';
    })
    console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let devs = 0;
  let ads = 0;
  data.forEach((item)=>{
    if(item.profession=='admin')ads+=1;
    if(item.profession=='developer')devs+=1;
  })
  console.log(`Developers:${devs}, Admins:${ads}`);
    
}

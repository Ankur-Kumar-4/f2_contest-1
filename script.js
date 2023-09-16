const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "Ankita", age: 16, profession: "manager" },
  { name: "Bitch", age: 22, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(dev=>{
    if (dev.profession.toLowerCase()==="developer"){
      console.log(dev.name, dev.age, dev.profession)
    }
  })
}

// 2. Add Data
function addData() {
 let name = prompt("Add Your Name")
 let age = prompt("Add your age")
 let profession = prompt("Add your profession")

 if(name && age && profession) {
  data.push({name, age, profession})
 }

}

// 3. Remove Admins
function removeAdmin() {
let index = data.findIndex(dev=> dev.profession==="admin")
data.splice(index, 1)
console.log(data)
}

// 4. Concatenate Array
function concatenateArray() {
  const data2= [{name:"Ankur", age:18, profession:"developer"},{name:"Ankit", age:23, profession:"admin"}]
  const data3= data.concat(data2)
  console.log(data3)
}

// 5. Average Age
function averageAge() {
  data.reduce()
}

// 6. Age Check
function checkAgeAbove25() {
 const ageAbove25= data.filter(dev => dev.age>25)
 if(ageAbove25){
  console.log( true) 
  return
}
console.log
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessions=[]
  data.forEach(dev=>{
    if(!uniqueProfessions.includes(data.profession)){
      uniqueProfessions.push(dev.profession)
    }
  })
  console.log(uniqueProfessions)
}

// 8. Sort by Age
function sortByAge() {
  return data.sort((a, b)=> a.age - b.age)
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach(data=>{
    if(data.name=="john")
    {
      data.profession="manager"
      return
    }
  })
  console.log(data)
}

// 10. Profession Count
function getTotalProfessions() {
  let countProfessions =0
  data.forEach(dev=>{
    if(dev.profession.toLowerCase()=="admin" || dev.profession.toLowerCase()=="developer" ){
      countProfessions++
    }
  })
  console.log(countProfessions)
}

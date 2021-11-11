class Number {
  constructor(number) {
    this.number = number;
  }  
  toRoman() {
    if ( !(this.number > 0 && this.number < 4000) || (isNaN(this.number)) ) {
      return 'The value must be a number between 1 and 3999'
    }
    const romanRelation = {
      1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "IL", 50: "L",
      90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"
    }
    const keys = Object.keys(romanRelation) // decimal values
    let roman = ""
    let n = this.number
    while (n > 0){
      let max = Math.max(...keys.filter(val => val <= n)) // maximum of the resulting filter array
      roman = roman + romanRelation[max]
      n = n - max
    }
    
    return `${this.number} is ${roman} in roman numbers`
  }
}

const test1 = new Number(0)
console.log(test1.toRoman())

const test2 = new Number(444)
console.log(test2.toRoman())

const test3 = new Number(3999)
console.log(test3.toRoman())

const test4 = new Number('444')
console.log(test4.toRoman())

const test5 = new Number(222)
console.log(test5.toRoman())

const test6 = new Number('££££')
console.log(test6.toRoman())



// const relation = {
//   1: "I",
//   4: "IV",
//   5: "V",
//   9: "IX",
//   10: "X",
//   40: "IL",
//   50: "L",
//   90: "XC",
//   100: "C",
//   400: "CD",
//   500: "D",
//   900: "CM",
//   1000: "M"
// }

// const toRoman = (num) => {
//   const keys = Object.keys(relation) // decimal values
//   let roman = ""

//   while (num > 0){
//     let max = Math.max(...keys.filter(val => val <= num)) // maximum of the resulting filter array
//     roman = roman + relation[max]
//     num = num - max
//   }
  
//   return roman

// }

// console.log(toRoman(999))
var s = 's'
var s1 = "s"
var username = "suluxan"
var s2 = `Welcome, ${username}`

var s4 = new String("a")

s1.endsWith()
var a = 1 
a.toString()
JSON.stringify()

console.log(s.length)

if (s.includes("s")) {
    console.log(true)
}

var s = "AA24adf@"
var regexPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
console.log(s.match(regexPassword))
a = s.slice(3,5)
console.log(a)

var splitPassword = s.split("")
console.log(splitPassword)
// for(var i = 0; i < splitPassword.length; i++) {
//     console.log(splitPassword[i])
//     if (splitPassword[i].includes("@") || splitPassword[i].includes("!")) {
//         console.log("yay!")
//     }    
// }
splitPassword.forEach(function(element) {
    if (element.includes("@")) {
        console.log("we're safe!")
    }
})
// var arrayTest = [1,2,3]
// arrayTest.
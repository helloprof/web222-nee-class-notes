// var x = 1;

// function twosquared(){
//     return 2 * 2
//     var a = 2
// }

// a = twosquared()
// console.log(a)


// var square = function(n) {
//     return n * n 
// }

function log(a) {
    console.log(arguments);
}

log("correct");          // 1, "correct", "correct"
log("also", "correct");  // 2, "also", "also"
log();                   // 0, undefined, undefined



console.log("hello","we","are","in","class")



var student = function(assignment1, assignment2, bonus) {
    if (bonus) {
        var finalGrade = assignment1/50+assignment2/50 * bonus
    } else {
        var finalGrade = assignment1/50+assignment2/50
    }
}


function parent() {
    x = 2;
    function child() {
        console.log(x);
    }
    child()
}
parent()


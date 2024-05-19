/* Zadání čísel
let a = 55;
let b = 15;
let c = 5;

// Porovnání a a b
let max;
if (a > b) {
    max = a;
} else {
    max = b;
}

// Porovnání max a c
if (max < c) {
    max = c;
}

// Výpis největšího čísla
console.log("Největší číslo je:", max);
*/


// another :-)

function max3(a, b, c) {
    let max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    
    if (max < c) {
        max = c;
    }
    
    return max;
}

// Use case
let result = max3(100, 45, 18);
console.log(result);


// Zadání čísel
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

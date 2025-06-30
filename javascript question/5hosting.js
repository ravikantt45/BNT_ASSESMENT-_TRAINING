// take var example
console.log("Using var:");
console.log(a); 
var a = 10;

// take let example
console.log("Using let:");
try {
  console.log(b); 
} catch (err) {
  console.log("Error:", err.message);
}

let b = 20;

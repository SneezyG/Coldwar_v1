
function part(s) {    
    let [x, y, z] = [0, 0, 0];
    let i = s.length - 1;
    
    for (; x <= i; x++) {
        y = s.lastIndexOf(s[x])
        if (y > z) z = y;

        if (z == x) {
            if (z == i) {
                return [s]; // return the full string
            }
            else if (z == 0) {
                continue;
            }
            else {
                let slicePart = [s.slice(0, z+1)]; // slice the string
                let remainPart = part(s.slice(z+1)); // call the part func on the sliced remains
                return slicePart.concat(remainPart); //return the array
            }
        }
    }
}


let letters = "aabbcc";
console.log(part(letters))
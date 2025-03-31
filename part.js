
function part(s) {    
    let [x, y, z] = [0, 0, 0];
    let i = s.length - 1;
    
    for (; x <= i; x++) {
        y = s.lastIndexOf(s[x])
        if (y > z) z = y;

        if (z == x) {
            if (z == i) {
                return [s.length]; // return the string size
            }
            else if (z == 0) {
                continue;
            }
            else {
                let sliceLength = [z+1]; // size of the sliced string
                let remainsLength = part(s.slice(z+1)); // call the part func on the sliced remains
                return sliceLength.concat(remainsLength); //return array of substrings size
            }
        }
    }
}


let letters = "aabbcc";
console.log(part(letters))
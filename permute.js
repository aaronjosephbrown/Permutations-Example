let letters = "abc";

// Define the permute function, which takes a string of letters as an argument
function permute(letters) { 
    // Initialize an empty array to store the permuted strings
    let result = []; 
    // Iterate over each character in the input string
    for(let i = 0; i < letters.length; i++) { 
        // Store the current character in a variable
        let firstChar = letters[i];
        // Create a string containing all characters except the current one
        let remaider = letters.substring(0,i) + letters.substring(i + 1)
        // Recursively permute the remaining characters
        for (let permutation of permute(remaider))  {
            // Add the current character to each permuted string and store the result
            result.push(firstChar + permutation);
        }
    }
    // If the input string is empty, add an empty string to the result array
    if (letters.length === 0) {
        result.push(''); 
    }
        // Return the result array
        return result;  
    
}
// Log the permuted strings to the console
console.log(permute(letters).join(" "))


const add = (input_string : string)=>{
    try {
        if (input_string==="") {
            return 0;
        }

        let delimiter = /,|\n/; // default delimiters
        if (input_string.startsWith("//")) { // check for custom delimiters
          const parts = input_string.split("\n"); 
          delimiter = new RegExp(parts[0][2]);// update delimiter from default to custom 
          input_string = parts[1]; 
        }
      
        const numArray = input_string.split(delimiter).map(Number); //split using custom delimiter and convert it to number
        return numArray.reduce((sum, num) => sum + num, 0); // add the numbers and get sum
    } catch (error) {
        throw error;
    }
}


export default add;
const add = (input_string : string)=>{
    try {
        if (input_string==="") {
            return 0;
        }
    } catch (error) {
        throw error;
    }
}

console.log(add(""))

export default add;
const add = async(input_string : string)=>{
    try {
        console.log("input_string",input_string)
    } catch (error) {
        throw error;
    }
}

add("123");

export default add;
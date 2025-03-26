//this function is to do changes in API if we add or remove 
/*const apiRequest=async(url='',optionsObj=null,errMsg=null)=>{
    try{
        const response= await fetch(url,optionsObj)
        if(!response.ok) throw Error("please reload the app")
    }catch(err){
        errMsg=err.message
    }finally{
        return errMsg
    }
}

export default apiRequest */
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw new Error("Please reload the app");
        return await response.json(); // Return response data
    } catch (err) {
        console.error(err.message);
        return err.message; // Return the error message
    }
}
export default apiRequest 
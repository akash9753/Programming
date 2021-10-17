function createResult(error, data){
         /*const result = {}
         if(error){
            result ['----STATUS---'] = 'error'
            result['-----ERROR----'] = error
         }else{
            //console.log(data)
            result ['----STATUS---'] = 'success'
            result['-----DATA-----'] = data
         }
         //console.log(result)
         return result*/
         return error ? createError(error) : createSuccess(data)
}
function createSuccess(data){
   const result = {}
   result ['----STATUS---'] = 'success'
   result['-----SUCCESS----'] = data

   return result
}
function createError(error){
   const result = {}
   result ['----STATUS---'] = 'error'
   result['-----ERROR----'] = error

   return result
}
module.exports = {
    createResult : createResult,
    createError : createError,
    createSuccess:createSuccess
}
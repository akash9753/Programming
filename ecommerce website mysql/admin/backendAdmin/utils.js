function createResult(error, data){
         const result = {}
         if(error){
            result ['----STATUS---'] = 'error'
            result['-----ERROR----'] = error
         }else{
            //console.log(data)
            result ['----STATUS---'] = 'success'
            result['-----DATA-----'] = data
         }
         //console.log(result)
         return result
}
module.exports = {
    createResult : createResult
}
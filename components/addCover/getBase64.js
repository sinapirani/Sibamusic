

const getBase64 = (file) => {
   let res
   let reader = new FileReader();
   reader.readAsDataURL(file)
   reader.onload = function () {    
        res = reader.result
        // console.log(res);
   };
   res = reader.onload()
   reader.onerror = function (error) {
     return false
   };
   if(res) {
       return res
   }
}

export default getBase64
var IdGenerator=function(){}

IdGenerator.prototype.GenerateNumberId=function(length){
    if(length!==null&&length!==undefined){
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}else{
    throw "Invalid Data"
}
}
IdGenerator.prototype.GenerateId=function(length){
    if(length!==null&&length!==undefined){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}else{
    throw "Invalid Data"
}
}

IdGenerator.prototype.GenerateSecId=function(){
  var strLength=Math.floor(Math.random()*40)+Math.floor(Math.random()*26)+20
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
  var charactersLength = characters.length;
  for ( var i = 0; i < strLength; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

module.exports=new IdGenerator()
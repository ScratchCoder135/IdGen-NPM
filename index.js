var IdGenerator=function(){}

IdGenerator.prototype.GenerateNumberId=function(data){
    if(data.length!==null&&data.length!==undefined&&data.length!=="null"){
    var length=data.length
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
IdGenerator.prototype.GenerateId=function(data){
    if(data.length!==null&&data.length!==undefined&&data.length!=="null"){
      var length=data.length
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

IdGenerator.prototype.GenerateMixedAlphaId=function(data){
  if(data.length!==null&&data.length!==undefined&&data.length!=="null"){
    var length=data.length
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
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
IdGenerator.prototype.GenerateUpperId=function(data){
  if(data.length!==null&&data.length!==undefined&&data.length!=="null"){
    var length=data.length
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
IdGenerator.prototype.GenerateLowerId=function(data){
  if(data.length!==null&&data.length!==undefined&&data.length!=="null"){
    var length=data.length
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
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
IdGenerator.prototype.GenerateNumHyphId=function(data){
  if(data.length!==null&&data.length!==undefined&&data.length!=="null"){
    var length=data.length
    var result           = '';
    var characters       = '0123456789-';
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
IdGenerator.prototype.GenerateCustomizeId=function(data){
  if(data.length!==null&&data.length!=="null"&&data.length!==undefined&&data.datastring!==null&&data.datastring!==undefined&&data.datastring!==""){
    var length=data.length
    var result           = '';
    var characters       = data.datastring;
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
module.exports=new IdGenerator()
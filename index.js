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
  if(data.length!==null&&data.length!=="null"&&data.length!==undefined){
    var length=data.length
    var result           = '';
    var characters
    if(data.datastring!==null&&data.datastring!==undefined&&data.datastring!==""){
    characters       = data.datastring;
    }else{
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    }
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
IdGenerator.prototype.GenerateCustomizePatternId=function(data){
  if(data.length!==null&&data.length!=="null"&&data.length!==undefined&&data.pattern!==null&&data.pattern!==null&&data.pattern!==undefined&&data.pattern!==""){
    var length=data.length
    var result           = '';
    var characters
    if(data.datastring!==null&&data.datastring!==undefined&&data.datastring!==""){
    characters       = data.datastring;
    }else{
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    }
    var pattern=data.pattern
    var chl=pattern.replace(/#/g,"")
    var idL=data.length - chl.length
    var charactersLength = characters.length;
    for ( var i = 0; i < idL; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   result=pattern.replace(/#/g,result)
   return result;
}else{
    throw "Invalid Data"
}
}
module.exports=new IdGenerator()
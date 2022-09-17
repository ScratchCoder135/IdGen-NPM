# Sec-Id 

# A package for generating unique IDs.

### 🔽Install
```bash
$ npm install sec-id
```

### 🔨Usage:

```javascript
const Generator=require('sec-id')

var NormalId=Generator.GenerateId({length:15})
//Put the length of the Id into the parameter field.

var NumberId=Generator.GenerateNumberId({length:15})

console.log(NormalId)

console.log(NumberId)
//eugjdnsl471Gher
//295739587936457
```
#### Example of Shell execution
```javascript
#!/usr/bin/env node
const g=require("sec-id")
g.GenerateCustomizePatternId({length:999,pattern:"usr82194*#"})

//usr82194*u8ow3ehf45378tc54jo934c8jhzjhJKJYHKKOJGjw7hc87whrty7v4ryr9gterhtr97je4tc753w78gGFJGGJEGGFDSZJtzr6rewr4376r643r8wygfjsdgfjskd...

```
#### Secured-Ids
```javascript
const Generator=require('sec-id')

var NormalId=Generator.GenerateSecId()//This Id is suitable for Secure Purposes
```
#### Other Ids
```javascript
var MixId=Generator.GenerateMixedAlphaId()//Mixed alphabet id
var Upper=Generator.GenerateUpperId()//Uppercase only id
var Lower=Generator.GenerateLowerId()//Lowercase id
var NumberSlash=Generator.GenerateNumHyphId()//Id with number and hyphen -
var Customizr=Generator.GenerateCustomizeId({length:24,datastring:"YourDataString"})//Get ID with custumized characters
```

#### 🌄Patterns
We support customize patterns
```javascript
var Pattern=g.GenerateCustomizePatternId({length:15,pattern:"user123#"})
//Use # to be the part you want to have random id.
console.log(Pattern)
//user123E5Gc6K3d
```
##### Examples
You can use this function in many ways such as user management system(with the help of other packages)
```javascript
//Example
var db=[{userid:"User12345678901234567890",password:"1234567",
device:"Windows 11,Chrome,version 100"}]


var newUserID=g.GenerateCustomizePatternId({length:24,pattern:"User#"})
db.push({userid:newUserID,password:request.body.password,device:request.body.device})
response.send("User Created")
```
#### Structures
ModuleName.Function({length:number,datastring:string})
#### 🍪Example (Cookies)
```javascript
request.cookies.LoginId=Generator.GenerateId({length:Math.floor(Math.random()*88)+12})

//You can have an Id to identify users.
```
### 🎙Credits

- S-Studio

### 🎉Update Logs
#### 2022/08/20 v2.2
#### Updated New function
```javascript
var Pattern=g.GenerateCustomizePatternId({length:15,pattern:"user123#"})
```

2022/08/19 v2.0,v2.1
Add a function
Changed the name

2022/08/19 v1.0
Create the package

### 🧪Bug reports & Source Codes
Please find me on [Github](https://github.com/ScratchCoder135)
This project ▶ [Github Repo](https://github.com/ScratchCoder135/IdGen-NPM)

### 🌐Website

[Website](https://sec-id.netlify.app/index.html)

### 📕License
ISC Licensed.


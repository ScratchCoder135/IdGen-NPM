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
2022/08/19 v2.0,v2.1
Add a function
Changed the name

2022/08/19 v1.0
Create the package

### 🧪Bug reports & Source Codes
Please find me on [Github](https://github.com/ScratchCoder135)
This project ▶ [Github Repo](https://github.com/ScratchCoder135/IdGen-NPM)




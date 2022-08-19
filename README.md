# StrID-Generator

# A package for generating unique IDs.

### 🔽Install
```bash
$ npm install generate-unique-ids
```

### 🔨Usage:

```javascript
const Generator=require('generate-unique-ids')

var NormalId=Generator.GenerateId(15)
//Put the length of the Id into the parameter field.

var NumberId=Generator.GenerateNumberId(15)

console.log(NormalId)

console.log(NumberId)
//eugjdnsl471Gher
//295739587936457
```
#### Secured-Ids
```javascript
const Generator=require('generate-unique-ids')

var NormalId=Generator.GenerateSecId()//This Id is suitable for Secure Purposes
```
#### Other Ids
```javascript
var MixId=Generator.GenerateMixedAlphaId()//Mixed alphabet id
var Upper=Generator.GenerateUpperId()//Uppercase only id
var Lower=Generator.GenerateLowerId()//Lowercase id
var NumberSlash=Generator.GenerateNumHyphId()//Id with number and hyphen -
```
#### 🍪Example (Cookies)
```javascript
request.cookies.LoginId=Generator.GenerateId(Math.floor(Math.random()*88)+12)

//You can have an Id to identify users.
```
### 🎙Credits

- S-Studio

### 🎉Update Logs
2022/08/19 v2.0,v2.1
Add a function

2022/08/19 v1.0
Create the package

### 🧪Bug reports & Source Codes
Please find me on [Github](https://github.com/ScratchCoder135)




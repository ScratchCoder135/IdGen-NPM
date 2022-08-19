# StrID-Generator

# A package for generating unique IDs.

### 🔽Install
```bash
$ npm install strid-generator
```

### 🔨Usage:

```javascript
const Generator=require('strid-generator')

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
const Generator=require('strid-generator')

var NormalId=Generator.GenerateSecId()//This Id is suitable for Secure Purposes
```
#### 🍪Example (Cookies)
```javascript
request.cookies.LoginId=Generator.GenerateId(Math.floor(Math.random()*88)+12)

//You can have an Id to identify users.
```
### 🎙Credits

- S-Studio

### 🎉Update Logs
2022/08/19 v1.0
Create the package

### 🧪Bug reports & Source Codes
Please find me on [Github](https://github.com/ScratchCoder135)




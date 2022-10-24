project setup for typescript and npm
make sure node installed first. test 

1) mkdir cd into it, npm -y init to create default project.json
2) npm i typescript --save-dev 
-save-dev puts the dependencies in a separate part of package.json so we separate the libs for development and production
3) tsc init
4) npm i --save-dev @types/node 
5) 

ES5, ES6,.. ES13 vs ES2017, ES2018, ES2022

commonjs vs esmodules
https://www.knowledgehut.com/blog/web-development/commonjs-vs-es-modules


{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",   //for nodejs runtime, commonjs vs es modules.  commonjs modules code not bundled for browser.            
    "lib": ["es6"],                     
    "allowJs": true, // allows JS to coexist with ts in same directory. test???? it should get transpiled together in the bundler
    "outDir": "build",                          
    "rootDir": "src",
    "strict": true,         
    "noImplicitAny": true, //
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}

https://khalilstemmler.com/blogs/typescript/node-starter-project/


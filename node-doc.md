before node to run js it was necessary to use script tag inside html but in node its possible to run with html

console.log("hello world , welcome to node js learning session");

to run js file in node js environment syntax followed is 
node <file name> eg: node index.js

------------------------------------------------------------------------
what is node.js ?
-> runtime environment for executing js code outside of browser. 
-> used to built backend services called APIs.

the fontend of the application has to connect to some backend services in order to get required data 

**why node.js?**
   ** Its ideal for building highly scalable, data-intensive and real time applications or backend services**  (Data-intensive is used to describe applications that are I/O bound or with a need to process large volumes of data.)

-> great for agile development
->fast (bcoz it runs on google v8 engine )and scalable
->uses js so no need to learn another language for backend development
->consistent code base 
-> have large open source libraries (can concentrate core of app instead of worring for building setup of initials)

**tools used to build backend services**
-> ASP.Net(c#)
-> rails(ruby)
-> django (python)
-> Node.js(javasctipt) used in paypal , uber , netflix , walmart etc

**node.js architecture**
when we run js in browser

js code --> js engine --> machine code

browser : js engine used
Edge    : Chakra
Mozilla : spiderMonkey
Chrome  : V8

bcoz of this various engines js could behave diffently 
Hence
```with help of runtime environment it could be able to achieve uniform behaviour of code 
``**`Ryan Dahl** took out fastest js engine i,e V8 and integrated with cpp to make runtime environment calle node.exe

So


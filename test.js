// // // // // // // // const xFn = (fn) =>{
// // // // // // // //     var a1 = {};
// // // // // // // //     return (x)=>{
// // // // // // // //         if (a1[x]) {
// // // // // // // //             return a1[x]
// // // // // // // //         } else {
// // // // // // // //             return a1[x] = fn(x)
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // // }

// // // // // // // const xFn = () =>{
// // // // // // //     var a1 = 0;
// // // // // // //     return (x)=>a1=a1+x
// // // // // // // }


// // // // // // // // const test = xFn(x=>x*x*x);
// const test = xFn();

// console.log(test(2)); // 2
// console.log(test(5)); // 7
// console.log(test(2)); // 9

// // // // // // // const x = [{a:1}, {b:1}]
// // // // // // // const y = [{k:1}, {m:2}]
// // // // // // // // z = [{a:1, k:1}, {b:1, m:2}]

// // // // // // // // var class_ = {
// // // // // // // //     name: "test",
// // // // // // // //     main: function () {
// // // // // // // //         console.log(this.name)
// // // // // // // //     },
// // // // // // // //     arr: ()=>console.log(this.name)
// // // // // // // // }

// // // // // // // // class_.arr();


// setTimeout(()=>console.log("In timeout"), 0);
// Promise.resolve("In promise resolve").then(data=>console.log(data));
// for (let index = 0; index < 10000000; index++) { // This loop takes 2 ms
//     console.log("In console log");
// }
// // // // // // // a = Object.assign({}, {a:1}, {b:2});
// // // // // // // console.log(a);
// // // // // // var c = {"data":{"courseQuery":{"name":"Test Course","instanceId":"dW5kZWZpbmVkaW5zdGFuY2UxNTc0OTM3MDE3MzQz","code":"TestCourse","activeTopicId":"5db001e38d24f491d455a699","createdAt":"2019-10-10T09:30:16.668Z","modules":[{"id":"5d9efa4b51699d5eeb10d69d","topics":[{"id":"5d9efa7f51699d5eeb10d69e"},{"id":"5db001e38d24f491d455a699"}],"quizzes":[{"id":"5d9efa9551699d5eeb10d69f"},{"id":"5db003048d24f491d455a69a"}]},{"id":"5ddd1c34784baa90436effd1","topics":[{"id":"5dde20ff8cd2b9a5dbcdb8b7"}],"quizzes":[]}]}}}

// // // // // // console.log(c.data.courseQuery.modules.reduce((x,y)=>x+y.quizzes.length + y.topics.length, 0))

// // // // // // // console.log(c.mod.reduce((x,y)=>x+y.topics.length+y.quiz.length, 0));

// // // // // const test = (x)=>{
// // // // //     return new Promise((resolve, reject) => {
// // // // //         if (x>100) {
// // // // //             reject("too high")
// // // // //         } else{
// // // // //             resolve(100-x);
// // // // //         }
// // // // //     })

// // // // // }

// // // // // const test2 = async ()=>{
// // // // //     try {
// // // // //         const x = await test(1000).catch(err=>{
// // // // //             const error = new Error(err);
// // // // //             error.code = 0;
// // // // //             throw error;
// // // // //         });
// // // // //         return x;
// // // // //     } catch (error) {
// // // // //         console.log("in catch", error.code);
// // // // //         console.log(JSON.stringify(error));
// // // // //     }
// // // // // }

// // // // // test2().then(console.log).catch(console.log)


// // // // // const test = [
// // // // //     {
// // // // //         test1: [1,2,3]
// // // // //     },
// // // // //     {
// // // // //         test1: [5,6.7]
// // // // //     }
// // // // // ]

// // // // // const x = test.reduce((ac, crr)=>[...ac,...crr.test1], []).fill;

// // // // // console.log(x);




// // // // // if (moduleData) {
// // // // //     let w = 100/moduleData.length;
// // // // //     let x = 0;
// // // // //     moduleData.forEach(data=>{
// // // // //         if (data.history) {
// // // // //             let modW = w/(data.topics.length + data.quizzes.length)
// // // // //             data.topics.forEach(d=>{
// // // // //                 if (d.history) {
// // // // //                     x = x + modW;  
// // // // //                 }
// // // // //             });
// // // // //             data.quizzes.forEach(d=>{
// // // // //                 if (d.history) {
// // // // //                     x = x + modW;  
// // // // //                 }
// // // // //             });
// // // // //         }
// // // // //     });
// // // // //     console.log(x);
// // // // // }

// // // // const x = [{
// // // //     y: 2
// // // // },
// // // // {
// // // //     z: 1
// // // // }]
// // // // x.forEach(k => {
// // // //     k.y = 1
// // // // })

// // // // console.log(x);

// // // // console.log

// // // console.log(JSON.stringify(module.exports));
// // // console.log(JSON.stringify(module.parent.exports));


// var input =[
//   {make:"BMW", model:"320d"},
//   {make:"TATA", model:"aria"},
//   {make:"Maruti", model:"800"},
//   {make:"Maruti", model:"wagnor"},
//   {make:"BMW", model:"720d"},
//   {make:"BMW", model:"320d"}  
// ];

// // output = {"BMW": ["320d","720d"], "TATA":["aria"], "Maruti":[800, "wagnor"]}

// // // var output = input.reduce((acc, curr)=>{
// // //     if (acc[curr.make]) {
// // //         // console.log(JSON.stringify(acc));
// // //         // console.log(JSON.stringify(curr));
// // //         acc[curr.make].push(curr.model);
// // //         // console.log(JSON.stringify(acc[curr.make])); 
// // //         const s = new Set(acc[curr.make])
// // //         acc[curr.make] = Array.from(s) 
// // //     } else {
// // //         acc[curr.make] = [curr.model]
// // //     }
// // //     return acc
// // // }, {})

// // // console.log(output);


// // var test = 1;

// // function doStuff(a){
// //   var test = 4;
  
// //   console.log(test);
  
// //   if(1==1){
// //     var test = 2;
// //   }
  
// //   console.log(test);
// // }

// // doStuff();

















// const executeFater3Sec = (func, delay) => { 
//   let timer 
//   return function() { 
//       const context = this
//       const args = arguments 
//           clearTimeout(timer) 
//           timer 
//           = setTimeout(() => func.apply(context, args), delay) 
//   } 
// } 

// let html = `<head><meta></meta></head><body><div id="root"></div></body>`;

// const sepearator = `<div id="root">`
// console.log(html.indexOf(sepearator));
// console.log(html.substring(0, 32+sepearator.length));
// html = html.substring(0, 32+sepearator.length) + `<div>test</div>` + html.substring(32+sepearator.length)
// console.log(html);

/**
* @param {Object} obj1
*/
const merge = (obj1, obj2)=>{

  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length > 0) {
    return obj2;
  }
  if (Object.keys(obj2).length === 0 && Object.keys(obj1).length > 0) {
    return obj1;
  }
  if (Object.keys(obj2).length === 0 && Object.keys(obj1).length === 0) {
    return obj1;
  }
  const keyArray = Array.from(new Set(Object.keys(obj1), Object.keys(obj2)))
  for (let i = 0; i < keyArray.length; i++) {
    const key = keyArray[i];
    obj1[key] = merge(obj1[key], obj2[key])
  }
  return obj1;
}

const x = {m:{n:1}}
const y = {m:{}, k: {x:1}}


console.log(JSON.stringify(merge(x,y)))


// console.log(html.replace(`</head>`, `<link></link></head>`));
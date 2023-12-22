import axios from "axios";

/*
"https://api.github.com/users/{user}"
take the user name from the user
[
    {
        name:
        follower:
        following
    }
]
*/
// let users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry"];

// function main(userName){
//     return axios.get(`https://api.github.com/users/${userName}`);
// }
// const userData=[]
// users.forEach((user)=>{
//     main(user)
//      .then((res)=>{
//         const item  = {};
//         item.name=res.data.name;
//         item.id=res.data.id;

//         userData.push(item)
//         // console.log(item)
//         // console.log(userData)

//      })
//      .catch((err)=>{
//         console.log(err.response.data.message);
//      })
// })
// setTimeout(()=>{
//     console.log(userData)
// },2000)
//
//=====================
// promise all (promise 1, promise 2, .......)
// because pervious method was taking time so we have to add the setTimeOut fun 
// const users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry"];
// function main(userName){
//     return axios.get(`https://api.github.com/users/${userName}`);
// }
// const userData = [];
// const promiseArray = users.map(user => main(user));

// Promise.all(promiseArray)
// .then((res)=>{
//     //   console.log(res[0].data)
//       res.forEach((ele)=>{
//         const info = {}
//         info.name=ele.data.name
//         info.id=ele.data.id

//         userData.push(info)
//       })

//       console.log(userData)

// })
// .catch((err)=>{
//     console.log(err.response.data.message)
// })
//================
//(async awaait)
// const users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry"];
// function main(userName){
//     return axios.get(`https://api.github.com/users/${userName}`);
// }

// async function hitApli(){
//     try{
//        const userData = [];
// const promiseArray = users.map(user => main(user));
// let res = await Promise.all(promiseArray);
// res.forEach((ele)=>{
//     const info = {}
//       info.name=ele.data.name
//          info.id=ele.data.id

//         userData.push(info)
// })
// // // await main(users);
// //       users.forEach((ele)=>{
// //         const info = {}
// //         info.name=ele.data.name
// //         info.id=ele.data.id

// //         userData.push(info)
// //       })

// console.log(userData)

//     }
//     catch(err){
//         console.log(err.response.data.message);
//     }

// }
// hitApli()
// //=======================
// const users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry","shabbirjodhpur"];
// function main(userName){
//     return axios.get(`https://api.github.com/users/${userName}`);
// }
// async function hitApi(){
//     try{
//     //    for(let i=0; i<=users.length-1; i++){
//     //     let a = users[i];
//     //     let res = await main(a);
//     //     console.log(res.data)
//     //    }
//     users.forEach(async (ele)=>{
//         let res = await main(ele);
//         console.log(res.data)
//     })
//     }
//     catch(err){
//         console.log(err.response.data.message)
//     }
// }
// hitApi();
//==================
const users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry","shabbirjodhpur"];
function main(userName){
    return axios.get(`https://api.github.com/users/${userName}`);//return promise
}
async function gitData(){
    try{
        let promiseArr = [];
        for(let i =0; i<=users.length-1; i++){
            promiseArr.push(main(users[i]));
        }
        let res =await Promise.all(promiseArr);
        // console.log(res);
        let dataArr=[];
        for(let i=0; i<=res.length-1; i++){
            let obj = {};
            obj.name=res[i].data.name;
            obj.id=res[i].data.id
            // dataArr.push(res[i].data)
            dataArr.push(obj);
        }
console.log(dataArr)

    }
    catch (err){
          console.log(err.response.data.message)
    }
}
gitData();

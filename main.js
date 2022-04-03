

// // 
// // promise 랑 async await정리


// // promise가 멀까?
// // promise쓰는법을 알기 위해 여러 시도를 해보았다 

// function fetchUser1()  {
//   return new Promise((resolve, reject) => {
//     return 'ellie';
//   } )
//   }
  
//   const user = fetchUser1()
//   console.log(user)
//   // 나의 예상: promise가 ellie라는 값을 뽑아 내겠지 라고 
//   // 결과: Promise{<pending>}
  
//   // 뜻: 비동기의 결과가 아직 결정되지 않았다
//   // promise안에 resolve나 reject가 없으면 
//   // 값이 결정되지 않았다라는 뜻의 pending이 뜨게된다 
//   // 그리고 내가 원하는 값 ellie는 여기서 구할 방법이 없다  
  
  
//   // 그래서 이제는 promise객체 안에 resolve를 집어넣었다 
//   function fetchUser2() {
//     return new Promise((resolve, reject) => {
//       // hard work  
//       resolve('hi')
//     })
//   }
  
//   // console.log(fetchUser2)를 하면
//   // 내가 예상하던 값 hi는 나오지 않고 promise객체가 나온다 
//   // 방법이 잘못됬다 
//   // promise객체 자체로는 resolve값의 자체를 뽑아 낼수 없다
  
  
//   const user2 = fetchUser2()
//   console.log(user2)
//   // 이렇게 백날 해봤자 promise객채만 리턴되지, resolve값을 못 뽑아 낸다는얘기
//   // 값을 얻고 싶다면 .then을 붙이고 resolve를 가져와야지만 될수 있다 
//   // .then((resolve)=>{ console.log(resolve)})
//   // 이제야 내가 원하는 값 hi를 콘솔로그에서 확인할 수 있게됬다 
//   user2.then(console.log)
  
  
//   function fetchUser3() {
//     return new Promise((resolve, reject) => {
//       // hard work  
//       resolve(() => console.log('fetchUser3'))
//     })
//   }
  
//   // resolve로 함수를 리턴하게 해서 fetchUser3라는 값을 콘솔로그에서 확인하려고 한다 
//   // 
  
//   const user3 = fetchUser3()
//   console.log(user3)
//   // 또 이렇게 하면 위와같은 이유로 백날해도 안된다 
//   // then을 사용해야함
//   user3.then(yes => {yes()})
//   // 이런 식으로 
  
//   // 정리
//   // promise안의 값을 가지고 싶다면 promise자체를 return 해서는 절대 값을 얻을 수 없다 
//   // .then()을 붙이고 resolve에 접근을 해야 값을 얻을 수 있음 
  
  
//   // 이정도 알면 가장 기본적인 promise사용법에서 해깔릴 부분은 다 집어본듯
  
//   // 그리고 마지막으로 then으로 출력하는 것들은  동기적으로 실행되는 것들보다 더 늦게 console.log에 나타나게 된다 
  
//   console.log('async await')
  
  
//   // async await 복습 
  
//   // 1. async 기본 
  
//   // async 이거랑 같다 
//   // function앞에 async를 넣어주면 됨 
//   // 그냥 이렇게 생각하면 빨라진다 
//   // '함수를 바로 비동기로 만들어버렸다 '
//   // 일반함수에 async를 붙임 으로 서 
  
//   function fetchfetch() {
//     return new Promise((resolve, reject)=> {
//       resolve('ellie')
//     } )
//   }
//   console.log(fetchfetch())
  
//   // 이거랑
  
//   async function fetchYes() {
//     return 'ellie'
//   }
//   console.log(fetchYes())
//   fetchYes().then(console.log)
  
 
  
  // 가 아예 같다 
  // promise의 resolve안에 있는 값 -> async로 바로 리턴될 수 있다
  
  // async를 붙여주면 리턴도 promise를 return 하게 된다 
  
  // '동기함수를 비동기적 함수로 바꿔주세요' 라는 의미정도로 생각하면 사용하기 편하다 
  // async는 어짜피 promise의 synthetic sugar라고 생각하고 있으면 된다 
  
  // 차이점 비교 예)
  
  // function yesyesys() {
  //   return new Promise((resolve)=> {
  //     // heayv work~~
  //     resolve('jobDone')
  //   })
  // }
  
  // async function yesyes() {
  //   await console.log('heavy work')
  //   return 'job done'
  // }
  
  // heavywork 해야되는 부분에 await을 붙여주면 된다 
  
  
  
  
  
  console.clear()
  
  // 2. await
  
  // '기다려줘'를 지시한다 
  // await이 붙어있는 부분의 작업이 다 끝날때까지 
  // 다른 작업 안하고 기다린다 
  // await붙은게 전부 완료가 되면 비로소 그다음것을 하게된다 
  
  // 이 동작으로 
  
// 1) delayTest에 await을 안넣었을경우 


function delay(value, ms) {
    return new Promise((resolve)=> setTimeout(() => resolve(`delay ${value}`), ms))
  }
  

const testFunction = async () => {
  const delayTest = delay('yes', 3000)
  console.log('hi')
  return console.log(delayTest)
}

testFunction()

// 결과
// hi
// promise{<pending>}
// delayTest에 값이 들어오기 까지 3초 걸리는데 
// 기다려주는거 전혀없다 바로 promise펜딩 때려 넣어버리고 
// 스윽 지나가버림 

// 2) delayTest 에 await을 넣은 경우 
console.clear()

// const testFunction2 = async () => {
//   const delayTest = await delay('yes', 3000)
//   console.log('hi')
//   console.log('hi2')
//   console.log('hi3')
//   return console.log(delayTest)
// }

// testFunction2()

// 결과 
// 3초 동안 아무 표시 없다가
// hi
// delay yes
// await은 프로미스가 들어오면 그것이 fulfilled상태가 될때까지 기다리는 로직이 내부에 있나봄
// 그말은 또 await에 promise객체를 안주면 아무 의미가 없다는 것도 말이 됨  
// 3초가 끝날때까지 기다려 줬다가 delayTest에 




console.clear()
// 3) 
//- delaytest2를 쓰지 않아도 실행이 되는 것을 알 수 있다 
//- 3초 지남 => hi 출력 -> 2초 기다림 -> hi2, hi3 출력 -> delay yes 출력




const testFunction3 = async () => {
  const delayTest = await delay('yes', 3000)
  console.log('hi')
  const delayTest2 = await delay('yes2', 2000)
  console.log('hi2')
  console.log('hi3')

  return () => console.log(delayTest)
}

testFunction3().then((value) => value()) 



// 핵심 : await은 promise객체가 fulfill 될떄까지 기다려주는 역할을 한다 
// await에 promise 가 아닌 것을 물려주면 아무 의미 없다 
// async 의 리턴 값은 resolve이다 
// return () => console.log() 하면 




  // async function getApple() {
  //   await delay(1000);
  //   return '사과'
  // }
  
  // const hi = getApple()
  // const hi2 = getApple
  // console.log(hi)
  // console.log(hi2)
  // hi.then(console.log)
  
  // async function getAppleYes(){
  //   const apple = await getApple();
  //   return `${apple} yes!`
  // }
  // getAppleYes().then(console.log)
  
  
  // // 시간이 오래 잡아먹는 함수는 await을 붙인다 
  
  // // async, await 에러 핸들링은 try catch로 한다 
  
  
  
  // async function getAppleYesYes(){
  //   try{const apple = await getApple();
  //     return `${apple} yes!`}
  //   catch{
  //     console.log('no ')
  //   }
    
  // }
  
  
  // // 그외 promise의 api를 사용할 수 있다 all이나 race같은것들
  
  
  // promise를 async await함수로 바꿔주는법
  // 1. 최종 값을 꺼내 올때, 
  // promise는 resolve,  
  // async는 return 으로 빼낸다
  
  // 2. promise의 then 은 
  // async에서는 await을 붙인 것이랑 같다 
  

  fetch(this.uploadImageurl, {
      method: "POST",
      body: formData
    }).then((res) => {
      return res.json();
    })
  
  // async에서는 
  const sampleFetch = async () => {
    const res = await fetch(this.uploadImageurl, {
      method: "POST",
      body: formData
    })
    return await res.json()

  }
  
  // fetch의 프로미스(x) resolve값(o)은 res로 들어가고,
  // res를 json()으로 parsing해주고 그 결과를 return 한다
  // 만약 res.json()앞에 await을 안붙이면
  // 위의 fetch작업이 끝나기도전에 res.json()이 실행되어서
  // return 값으로 null을 받게 될것이니까
  // await을 꼭 붙여줘야한다 
  
  
  // 최종 정리: 
  // promise를 언제 써야되냐
  // 프로그램하다가 heavy work 을 할 일이 생겼다
  // 근데 heavywork가 너무 오래걸려 나머지 작업들이 실행을 못하게 된다 
  // 그때 promise를 쓴다 

  // 그럼 await을 언제 붙이냐 
  // 위와 같은 상황이 발생해서 promise함수를 만들 필요성이 생길때
  // promise함수대신 promise함수의 synthetic sugar인 async await함수를 쓰기로 했다고 가정할떄
  // async함수 안의 await을 잘 생각해서 붙여야되는 과제가 생긴다 
  // await은 기본적으로 promise함수의 then을 쓸 곳에 await을 똑같이 쓰면 된다고 생각하면 된다 
  // await을 잘 붙이는것은 중요하다 
  // await을 적재적소에 못쓰면 먼저 실행되어야 될 코드가 완료 되기도 전에 뒷코드가 먼저 실행되어버려
  // 순서가 뒤죽박죽이 되어버려 결과가 null이 뜨거나 하기때문에 
  // 일의 흐름에 맞게 잘 붙여 줘야한다. 
  
  
  
  
  //
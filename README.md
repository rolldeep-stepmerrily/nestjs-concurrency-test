## Memo

promise.all: 74ms
worker threads: 82ms

1,000,000번 연산시 promise.all 이 조금 빠르지만 거의 비슷함


  
<img src="https://image.until.blog/rolldeep-stepmerrily/article/1724119606249"> 
<img src="https://image.until.blog/rolldeep-stepmerrily/article/1724119620802">

---

promise.all: 773ms
worker threads: 283ms

10,000,000 연산시 worker threads 가 3배 가량 빠름
  
<img src="https://image.until.blog/rolldeep-stepmerrily/article/1724119686200">
<img src="https://image.until.blog/rolldeep-stepmerrily/article/1724119693533">

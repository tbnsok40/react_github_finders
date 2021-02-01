

Route를 쓰려고 했지만 실패했다. 
``` javascript
<Route exact = 'true' components = {'ExpertSearchLocal'} />
```
코드는 문제 없어보였는데 구조의 문제였다.
내가 작업하는 component의 상위에 이미 route처리가 돼있던 것이다.

그래서 이럴 때는 route를 사용하지 않고, 분기처리를 하여 route와 같은 역할을 만들어준다.

```javascript
{curr_tab === 'loc' &&  <ExpertSearchLocal mediumCode = {MediumCode} convergeBtn = {this.convergeBtn.bind(this)}/>}
```


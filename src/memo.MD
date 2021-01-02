what is react

framework
client side javascript framework

dependecy: react library inside there
react-dom: needs when we work on web apps

```javascript
<Fragment>
	{/_ class대신 className _/}
	<h1> hello from react</h1>
	<h2>goodbye</h2>
</Fragment>;

// show the name only when showName is true;
{
	showName && name;
}
```

App.js
function형과 class형이 았다 => 둘의 차이는 무엇인지.
상수 선언 => return 안에서 해도/ 밖에서 해도 된다.
return내 하나의 div만 존재해야한다 or 하나의 <fragment>.

<div> tag를 parent element라고 한다.

props는 수정할 수 없다(간접 수정은 가능) (props: 읽기전용)
<---> state는 하나의 컴포넌트가 가질 수 있는 변경가능한 데이터
ex) this.state.name.toUpperCase() => 기존 name데이터를 대문자로 바꿔버렸지 모얌
결론\_결국 state데이터는 바꿀 수 있다.
state는 현재 컴포넌트에서 새로운 데이터를 만들어 낼 때 사용한다.

<hr>

props, state는 리액트에서 데이터를 다룰 때 사용하는 개념

// key: unique key props

next section(sec 5) we gonna refactor evthing into fucntional component, and context api, hooks

// hierable: x => github 페이지에서 company를 none으로수정 후 세이브 하면 그 정보가 api에 update 되구나 그래서 hierable 이 true로 변하는거고. (api작동원리)

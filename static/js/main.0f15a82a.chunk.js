(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{17:function(n,e,t){n.exports=t.p+"static/media/unsplash.1755a476.jpg"},19:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),o=t(13),i=t.n(o),s=t(2),u=t(3),l=t.n(u),p=t(8),d=t(1),f=t(18);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={}));var b=function(){var n=Object(p.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(f.a)({},n,{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),x=t(4),m=t(5);function g(){var n=Object(x.a)(["\n    transition: all 0.3s ease;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    button {\n        cursor: pointer;\n        user-select: none;\n        font-size: 1rem;\n        width: 100%;\n        height: 40px;\n        margin: 5px 0;\n        background: ",";\n        border: 3px solid #fff;\n        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n        border-radius: 10px;\n        color: #fff;\n        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(x.a)(["\n    max-width: 1100px;\n    background: #ebfeff;\n    border-radius: 10px;\n    border: 2px solid #0085a3;\n    padding: 20px;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    text-align: center;\n\n    p {\n        font-size: 1.2rem;\n    }\n"]);return h=function(){return n},n}var v=m.b.div(h()),w=m.b.div(g(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),j=function(n){var e=n.question,t=n.answer,r=n.callback,a=n.userAnswer,o=n.questionNr,i=n.totalQuestions;return c.a.createElement(v,null,c.a.createElement("p",{className:"nnumber"},"Question: ",o," / ",i),c.a.createElement("p",{className:"question",dangerouslySetInnerHTML:{__html:e}}),c.a.createElement("div",null,t.map((function(n){return c.a.createElement(w,{key:n,correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n},c.a.createElement("button",{disabled:!!a,value:n,onClick:r},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}))))},k=t(17),O=t.n(k);function E(){var n=Object(x.a)(['\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > p {\n        color: #fff;\n    }\n\n    .score {\n        color: #000;\n        font-size: 2rem;\n        margin: 0;\n        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n    }\n\n    h1 {\n        font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",\n            sans-serif;\n        background-image: linear-gradient(180deg, #fff, #87f1ee);\n        background-size: 100%;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        -moz-background-clip: text;\n        -moz-text-fill-color: transparent;\n        filter: drop-shadow(2px 2px #0085a3);\n        font-weight: 700;\n        font-size: 56px;\n        text-align: center;\n    }\n\n    .start,\n    .next {\n        cursor: pointer;\n        background-image: linear-gradient(180deg, #fff, #ffcc91);\n        border: 2px solid #d38558;\n        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n        border-radius: 10px;\n        height: 40px;\n        margin: 20px 0;\n        padding: 0 40px;\n    }\n\n    .start {\n        max-width: 200px;\n    }\n']);return E=function(){return n},n}function y(){var n=Object(x.a)(["\n    html {\n        height: 100%;\n\n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n"]);return y=function(){return n},n}var S=Object(m.a)(y(),O.a),z=m.b.div(E()),q=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)([]),u=Object(d.a)(i,2),f=u[0],x=u[1],m=Object(a.useState)(0),g=Object(d.a)(m,2),h=g[0],v=g[1],w=Object(a.useState)([]),k=Object(d.a)(w,2),O=k[0],E=k[1],y=Object(a.useState)(0),q=Object(d.a)(y,2),N=q[0],A=q[1],_=Object(a.useState)(!0),C=Object(d.a)(_,2),M=C[0],Q=C[1],I=function(){var n=Object(p.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),Q(!1),n.next=4,b(10,r.EASY);case 4:e=n.sent,x(e),A(0),E([]),v(0),o(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(z,null,c.a.createElement("h1",null,"React TS Quiz"),M||10===O.length?c.a.createElement("button",{className:"start",onClick:I},"Start"):null,M?null:c.a.createElement("p",{className:"score"},"Score: ",N),t&&c.a.createElement("p",null,"Loading Questions ... "),!t&&!M&&c.a.createElement(j,{questionNr:h+1,totalQuestions:10,question:f[h].question,answer:f[h].answers,userAnswer:O?O[h]:void 0,callback:function(n){if(!M){var e=n.currentTarget.value,t=f[h].correct_answer===e;t&&A((function(n){return n+1}));var r={question:f[h].question,correct:t,answer:e,correctAnswer:f[h].correct_answer};E((function(n){return[].concat(Object(s.a)(n),[r])}))}}}),t||M||O.length!==h+1||9===h?null:c.a.createElement("button",{className:"next",onClick:function(){var n=h+1;10===n?Q(!0):v(n)}},"Next Question")))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0f15a82a.chunk.js.map
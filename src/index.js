import _ from 'lodash';
import printMe from './print';
import './css/style.css';
import {cube} from './math';

function component() {
    var element = document.createElement('div');
    var Pre = document.createElement('pre');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    Pre.innerText=['Hello webpack!','5 cubed is equal to '+ cube(5)].join('\n\n');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(Pre);
    return element;
}

document.body.appendChild(component());

// 热插拔模块定义
// if(module.hot){
//     module.hot.accept('./print.js',function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }
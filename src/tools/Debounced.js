/**
 * 函数防抖，事件在触发n秒之后再去执行回调函数。如果在这n秒之内又被触发了，则重新计时
 * @param {*} fn 
 * @param {*} time 
 */

function debounced(fn, time){
    let timer = null;

    return function(...args){

        clearTimeout(timer)

        timer = setTimeout(()=>{        //由于这里的回调函数使用的是箭头函数，箭头函数的this在定义的时候就确定了，他的this指向函数在定义时所在作用域的this，也就找到了return的这个函数的this
            fn.apply(this, args)
        }, time)
    }
}

export default debounced
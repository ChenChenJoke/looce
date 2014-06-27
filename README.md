# jQuery custom-scrollbar text-overflow by javascript

A jQuery plugin for custom text-over-flow

## TODO

1、(父级class=text-overflow-byjs) 父级元素、子级元素可以是任何标签，使用时只要求父级元素有宽度和高度就OK，
2、不同浏览器默认的line-height不同，请同学设置一个默认值,否则不同浏览器下会有少许差异
3、父级容器添加padding-top的时候，不需要修改父级容器高度。(如果使用不习惯，外面添加新的父级容器实现);
4、关于性能：兼容主流浏览器，性能测试后为500毫秒渲染100条切割数据(目前在研究更快的算法)。
5、异步请求数据可以，手动激活方法，避免重复渲染，提供父级元素参数（jquery对象）。比如实例中的tob($("body"));就是初始body下的所有截断项

at last  look at demo


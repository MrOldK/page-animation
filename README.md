## 前言
  一直想把项目页面动画搞成类似于原生应用的切换效果，就先在github上瞅了瞅，还真有。通道=>[pageAinimate](https://github.com/zhengguorong/pageAinimate) 。<br>
  不过在使用中有几个缺点，一是监听不到设备硬件返回按钮的事；二是在页面复杂的情况下，切换页面会发生页面上移的情况。基于上面两种不友好的情况，我决定，重新造小轮轮~~~

## page-animation
- 核心：meta中的index

## 启动
- 安装依赖：`npm install`
- 运行项目：`npm run serve` 

## 如何实现？
  上面已经说了，核心在于meta中的index。也就是`router.js`中在配置routes的时候，将index手动写入meta中，RD自己根据功能需求和展现在用户面前的先后顺序，来确定index的值。index越小，则页面越先展现在用户眼前。所以，页面左右切换，会根据index的大小来进行进入离开动画。

## 效果展示
  Download -> npm install -> npm run serve -> open in browser


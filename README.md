# isetanspecial
Html5+css3+jquery+slickjs+兼容多终端响应式
点击页面预览：</br>

① https://amyidol.github.io/isetanspecial/isetanspecial/index.html </br>
② https://amyidol.github.io/isetanspecial/isetanspecial/sp.html </br>
③ https://amyidol.github.io/isetanspecial/isetanspecial/sp-course-01-06.html </br>
待更新....
### 说明：</br>
 index.html页面适配多种终端，
 sp.html页面为移动端页面</br>
 待更新~嘤嘤嘤~</br>
 js手写部分代码展示：</br>
![image](https://raw.githubusercontent.com/wiki/Amyidol/isetanspecial/instans.png)
### 其中修改的部分过程：</br>
0,	slickjs响应式轮播图插件使用，淡入淡出轮播图。</br>
插件在初始化的时候，注意点：</br>
①slide的对象是li还是div根据自己写的页面结构修改</br>
②slidejs插件在轮播的时候自动生成的button，修改样式的时候要把插件中默认的css样式复制下。</br>

```
    // slickjs轮播图初始化设置
    $('.draggable').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'li',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    });
```
1，绑定$(window).scroll 事件，当屏幕滚动到一定距离后，给header添加或移除is-active类名。</br>
 　问题：$.scroll 的高度获取不到，获取到的始终为0，</br>
 　解决：这时可以把window对象换成document，就可以获取屏幕滚动的高度了。</br>
2，	页边的四条边框线#body-frame1：
　固定在整个页面的上下左右四个方向，并且在页面加载时过渡显示。</br>
　用css3的anmition动画制作，包括动画延迟效果：</br>
```
	animation: fadeSide2 .3s .9s linear forwards;
  -webkit-animation: fadeSide2 .3s .9s linear forwards;
```
描述点：通过js给html页面添加类名使边框显示隐藏。</br>

3，	jquery实现a锚点链接平滑过渡效果：</br>

```
// 锚点链接缓动效果:页面上的所有的a的href链接点击后均为缓动500速度平滑过渡。
   var s = $("a[href*='#']");  
   使用时，页面中的a链接处的href的不要直接挂个#号
```
 4，	修改了t.addClass报错问题，对应的弹出框弹出对应的层：</br>
 　问题：全局变量使用不当，当全局变量里定义的变量对应的是不同的dom时，局部变量用的时候，报错了。</br>
 　解决：局部变量中，变量使用时要注意一下。</br>


6，其他。。。。

 
 
 
 
 
 

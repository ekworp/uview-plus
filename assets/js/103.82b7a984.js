(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{580:function(s,v,e){"use strict";e.r(v);var _=e(6),t=Object(_.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h2",{attrs:{id:"配置的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置的原理"}},[s._v("#")]),s._v(" 配置的原理")]),s._v(" "),v("h4",{attrs:{id:"_1-引入uview-plus主js库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入uview-plus主js库"}},[s._v("#")]),s._v(" 1. 引入uview-plus主JS库")]),s._v(" "),v("p",[s._v("为何要在"),v("code",[s._v("main.js")]),s._v("引入uview-plus的JS库？")]),s._v(" "),v("p",[s._v("因为uview-plus内部集成了很多的便捷JS工具，比如获取随机数的"),v("code",[s._v("radnom")]),s._v("方法，调用为"),v("code",[s._v("uni.$u.radom(min, max)")]),s._v("，可见这些方法都挂载在"),v("code",[s._v("$u")]),s._v("下，\n我们能通过"),v("code",[s._v("this")]),s._v("调用"),v("code",[s._v("$u")]),s._v("，又是因为"),v("code",[s._v("$u")]),s._v("挂载在Vue的原型链上，在这里uview-plus的做法为通过"),v("code",[s._v("app.use")]),s._v("，以插件的形式在内部进行"),v("code",[s._v("app.config.globalProperties")]),s._v("的挂载。")]),s._v(" "),v("p",[s._v("而"),v("code",[s._v("main.js")]),s._v("就是整个项目JS的入口，且Vue也是在这里引入的，所以我们自然而然就会想到把uview-plus的JS库在"),v("code",[s._v("mian.js")]),s._v("中引入了，如下：")]),s._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" uviewPlus "),v("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uview-plus"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uviewPlus"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),v("p",[s._v("注：或许您想知道"),v("code",[s._v("app.use")]),s._v("的作用是什么，见"),v("RouterLink",{attrs:{to:"/components/vueUse.html"}},[s._v("简要介绍app.use的原理")])],1),s._v(" "),v("h4",{attrs:{id:"_2-引入uview-plus的全局scss主题文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入uview-plus的全局scss主题文件"}},[s._v("#")]),s._v(" 2. 引入uview-plus的全局SCSS主题文件")]),s._v(" "),v("p",[s._v("uni-app不支持将SCSS变量相关的样式通过"),v("code",[s._v("App.vue")]),s._v("引入，为了统一的主题，以及日后的扩展，\n目前一些跟颜色相关的scss变量定义在全局变量中，这些变量有独特的命名("),v("code",[s._v("u-")]),s._v("开头)，不会与您的类名冲突。")]),s._v(" "),v("p",[s._v("这些变量需要写入到项目根目录的"),v("code",[s._v("uni.scss")]),s._v("中才有效(这是uni-app的机制问题)，它有一个特点是，编译成微信小程序后，不但注入到小程序工程\n根目录的"),v("code",[s._v("app.wxss")]),s._v("(全局样式文件)，而且还会同步注入到每一个页面单独的"),v("code",[s._v("*.wxss")]),s._v("中，所以如果您在"),v("code",[s._v("uni.scss")]),s._v("中的样式很多的话，有可能导致\n微信小程序编译单个包超出限制的"),v("code",[s._v("2M")]),s._v("大小，整包超出最大的"),v("code",[s._v("12M")]),s._v("大小，从而导致无法真机调试和发布微信小程序。")]),s._v(" "),v("p",[s._v("所以，我们建议，只将一些跟"),v("code",[s._v("scss")]),s._v("主题，变量相关的样式写入到"),v("code",[s._v("uni.scss")]),s._v("，而其他一般的全局样式文件，通过"),v("code",[s._v("App.vue")]),s._v("引入即可，在微信小程序编译的时候，\n它只会编译到小程序根目录的"),v("code",[s._v("app.wxss")]),s._v("中，而不会注入到其他的单个页面的样式中。")]),s._v(" "),v("h4",{attrs:{id:"_3-引入基础样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-引入基础样式"}},[s._v("#")]),s._v(" 3. 引入基础样式")]),s._v(" "),v("p",[s._v("由于目前(2020-04-29)uni-app的V3模式不支持在"),v("code",[s._v("main.js")]),s._v("中引入样式文件，故需要在"),v("code",[s._v("App.vue")]),s._v("中引入uview-plus的基础全局样式。"),v("br"),s._v("\n同时上面第2点也有说明，"),v("code",[s._v("App.vue")]),s._v("的样式为全局样式，微信小程序编译后只会注入到小程序根目录的"),v("code",[s._v("app.wxss")]),s._v("中。")]),s._v(" "),v("h4",{attrs:{id:"_4-配置easycom组件模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置easycom组件模式"}},[s._v("#")]),s._v(" 4. 配置easycom组件模式")]),s._v(" "),v("p",[s._v("easycom功能可以让用户无需安装、引用、注册，三个步骤后才能使用组件，详见"),v("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=easycom",target:"_blank",rel:"noopener noreferrer"}},[s._v("easycom文档"),v("OutboundLink")],1)]),s._v(" "),v("p",[s._v("easycom的另一个最大的特点是，它是"),v("strong",[s._v("按需引入")]),s._v("的，所以您引入了整个uview-plus组件，即使只用到了"),v("code",[s._v("button")]),s._v("组件，最终打包的时候只会把"),v("code",[s._v("button")]),s._v("打包进去，其他的组件都会被剔除。")]),s._v(" "),v("p",[s._v("Hbuilder X自2.5.1版开始正式支持"),v("code",[s._v("easycom")]),s._v("特性，"),v("strong",[s._v("HX2.5.5")]),s._v("版支持自动引入"),v("code",[s._v("components/组件名称/组件名称.vue")]),s._v("，考虑到用户的一些自定义组件\n都会放在"),v("code",[s._v("components")]),s._v("目录中，为了不和用户的自定义组件混淆，同时也是为了能让用户一键升级uview-plus，所以我们把uview-plus相关的所有内容都放在了根目录的\n"),v("code",[s._v("uview-plus")]),s._v("文件夹中。")]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("温馨提示")]),s._v(" "),v("p",[s._v("uni-app为了调试性能的原因，修改"),v("code",[s._v("easycom")]),s._v("规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uview-plus的功能。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);
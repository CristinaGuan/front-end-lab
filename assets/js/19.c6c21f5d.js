(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{398:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"常见错误日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见错误日志"}},[t._v("#")]),t._v(" 常见错误日志")]),t._v(" "),n("h2",{attrs:{id:"npm-发布失败"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-发布失败"}},[t._v("#")]),t._v(" npm 发布失败")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("➜  module-test git:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" publish Failed PUT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" code E403\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("no_perms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Private mode enable, only admin can publish this module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("no_perms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Private mode enable, only admin can publish this mod\nule: module-test\n****\n")])])]),n("p",[t._v("没有权限的原因可能是我们按照了淘宝的"),n("code",[t._v("npm")]),t._v("镜像，发布通过镜像代理，就会有权限问题。这时候将权限调整回来即可：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("➜  module-test git:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry http://registry.npmjs.org\n\n➜  module-test git:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" code ENEEDAUTH\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" need auth auth required "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" publishing\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" need auth You need to authorize this machine using "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" A complete log of this run can be found in:\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     /Users/anran/.npm/_logs/2019-04-27T13_56_25_234Z-debug.log\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加账号")]),t._v("\n➜  module-test git:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser\nUsername: anran758\nPassword:\nEmail: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this IS public"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" anran758@gmail.com\nLogged "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" as anran758 on http://registry.npmjs.org/.\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证邮箱")]),t._v("\n➜  module-test git:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" publish Failed PUT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" code E403\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" you must verify your email before publishing a new package: https://www.npmjs.com/email-edit "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" module-test\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" A complete log of this run can be found in:\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     /Users/anran/.npm/_logs/2019-04-27T14_09_30_297Z-debug.log\n\n➜  module-test git:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n+ module-test@1.0.0\n")])])]),n("h2",{attrs:{id:"npm-安装依赖报权限不足的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-安装依赖报权限不足的问题"}},[t._v("#")]),t._v(" npm 安装依赖报权限不足的问题")]),t._v(" "),n("p",[t._v("如果在安装依赖时发现错误中由以下错误, 可以尝试通过"),n("a",{attrs:{href:"https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("此指南"),n("OutboundLink")],1),t._v("解决问题:")]),t._v(" "),n("div",{staticClass:"language-log extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Please try running this command again as root/Administrator. npm\n(node:10370) UnhandledPromiseRejectionWarning: Error: EACCES: permission denied, open '/Users/anran/.zshrc'\n")])])]),n("p",[t._v("如果是在项目内碰见权限问题，可以先检查是不是 "),n("code",[t._v("node_modules")]),t._v(" 所属权限是 "),n("code",[t._v("root")]),t._v(" 的，如是应该调整为当前用户才对(macOS 环境)。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
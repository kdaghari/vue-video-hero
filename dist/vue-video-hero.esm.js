var e=function(e,t,n,o,i,s,a,r,d,l){"boolean"!=typeof a&&(d=r,r=a,a=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):t&&(c=a?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(u.functional){var f=u.render;u.render=function(e,t){return c.call(t),f(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return n}({render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hero is-large"},[t("figure",{staticClass:"image is-16by9"},[t("iframe",{staticClass:"has-ratio",attrs:{src:"https://www.youtube.com/embed/"+this.videoId+"?autoplay=1&controls=0&loop=1&mute=1&disablekb=1iv_load_policy=3&modestbranding=1&playsinline=1&rel=0",frameborder:"0",allow:"autoplay"}})]),this._v(" "),t("div",{staticClass:"is-overlay"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[this._t("content")],2)])])])},staticRenderFns:[]},void 0,{props:{videoId:String}},"data-v-6e743e9a",!1,void 0,void 0,void 0);function t(n){t.installed||(t.installed=!0,n.component("VueVideoHero",e))}var n={install:t},o=null;"undefined"!=typeof window?o=window.Vue:"undefined"!=typeof global&&(o=global.Vue),o&&o.use(n),e.install=t;export default e;

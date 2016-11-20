		/* 创建组件构造器  */
		var Home = Vue.extend({
			template: '#home',
			data: function() {
				return {
					msg: 'Hello, vue router!'
				}
			},
			methods: {
			    toAbout: function () {
			        router.go({ name: 'about', params: {number:2,age:23}});
			    }
			}
		})

		var About = Vue.extend({
		    template: '#about',
		    ready: function () {
		        alert('ready');
		        console.log('deviceid: ' + this.$route.params.number);
		    },
		    data: function ($router) {
		        alert('data');
		        var num = this.$route.params.number;
		        var age=this.$route.params.age;
		        return {
		            num: num,
		            age:age
		        }
		    },
		    init: function () {
		        alert('init');
		    },
		    created: function () {
		        alert('created');
		    },
		    destoryed: function () {
		        alert('destoryed');
		    },
		    compiled: function () {
		        alert('compiled');
		    }
		})

		/* 创建路由器  */
		var router = new VueRouter();

		/* 创建路由映射  */
		router.map({
		    '/home': {
                name:'home',
				component: Home
			},
		    '/about/:number/:age': {
		        name: 'about',
				component: About
			}
		})

		router.redirect({
			'/': '/home'
		})

		/* 启动路由  */
		var App = Vue.extend({})
		router.start(App, '#app')
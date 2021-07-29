console.log('vue test', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        titleClass: 'default-color',
    },
    methods: {
        toggleColor() {
            this.titleClass =
                this.titleClass === 'purple' ? 'default-color' : 'purple';
        },
    },
});



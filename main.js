// ;
Vue.component('task-list' , {

    template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',

    data()
    {
        return{
            tasks :
                [
                    {description:'Go to the store' , completed:false},
                    {description: 'Go to the gym' , completed: false},
                    {description:'Finish assignment' , completed:true},
                    {description:'Go to church' , completed:true}
                ]
        }
    }

});




Vue.component('task',{
    template : '<li><slot></slot></li>'
});


Vue.component('message',{

    props : ['title','body'],
    template : '<article class="message">\n' +
        '  <div class="message-header">\n' +
        '    <p>{{title}}</p>\n' +
        '    <button class="delete" aria-label="delete"></button>\n' +
        '  </div>\n' +
        '  <div class="message-body">\n' +
         '  <p>{{body}}</p>'+
        '  </div>\n' +
        '</article>'
});

Vue.component('coupon',{

    template:'<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
    methods : {
        onCouponApplied()
        {
           this.$emit('applied')
        }
    }

});

new Vue({

    el : '#roottwo',

    data() {
        return{

        }

    },
    methods : {

    }
});

window.Event = new class
{
    constructor()
    {
        this.vue = new Vue();
    }

    fire(event, data = null)
    {
        this.vue.$emit(event , data);
    }

    listen(event , callback)
    {
        this.vue.$on(event,callback)
    }
};
Vue.component('coupon',{

    template:'<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
    methods : {
        onCouponApplied()
        {
            Event.fire('applied')
        }
    }

});


Vue.component('letter',{

    template:'<div> ' +
        '<div id="greetings">' +
        '<slot name="greetings"></slot>'+
        '</div>' +
        '<div id="body">' +
        '<slot name="body" ></slot>' +
        '</div>' +
        '<div id="footer">' +
        '<slot name="footer">' +
        '<p>Regards people</p>' +
        '</slot>' +
        '</div>' +
        '</div>',
    methods : {
        onCouponApplied()
        {
            Event.fire('applied')
        }
    }

});

Vue.component('progress-view' , {

    data()
    {
        return {

            comletionrate : 50
        }
    }
})


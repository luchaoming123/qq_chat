<style scoped lang="less">
    .contact_box{
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: #F6F6F6;
        border: 1px solid #dcdee2;
        box-shadow: 1px 1px 50px rgba(0,0,0,.3);
        z-index: 1000;
        width: 260px;
        height: 520px;
        border-radius: 6px;
    }
</style>


<template>
    <div class="contact_box">
        <contact_title></contact_title>
        <contact_center></contact_center>
        <contact_bottom :background_color="background_color"></contact_bottom>
    </div>
</template>


<script>
    import contact_title from './Lists/top/contact_title.vue'
    import contact_bottom from './Lists/bottom/contact_bottom.vue'
    import contact_center from './Lists/center/contact_center.vue'
    export default {
        props:['background_color'],
        components:{
            contact_title,
            contact_bottom,
            contact_center
        },
        methods: {

        }
    }
</script>
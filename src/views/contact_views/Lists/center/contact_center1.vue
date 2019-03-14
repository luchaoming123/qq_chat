<style scoped lang="less">
    .contact_center1{

        .imgs{
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }
        .word_and{
            position: relative;
            margin-bottom:10px;
            cursor:pointer;
            .name{
                position: absolute;
                top:-2px;
                left: 50px;
                font-family: "PingFang SC";
                color: #464c5b;
                font-size: 14px;
                max-width: 140px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .word{
                position: absolute;
                top:18px;
                left: 50px;
                font-family: "PingFang SC";
                color: #9ea7b4;
                font-size: 12px;
                max-width: 140px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .vertical-center-modal{
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
</style>


<template>
    <div class="contact_center1">
        <Collapse simple>
            <Panel :name="item.id" v-for="item in contacts">
                {{item.name}}
                <p slot="content" class="word_and" v-for="item_two in item.values"  @click="alert_chat(item_two)" data-num="发发发发">

                    <img v-if="item_two.img == ''" class="imgs" src="../../../../images/people_imgs/1.jpg" alt="">
                    <img v-else class="imgs" :src="item_two.img" alt="">
                    <span class="name">{{item_two.name}}</span>
                    <span class="word">{{item_two.label}}</span>
                </p>
            </Panel>
        </Collapse>



        <contact_chat :alert_data="people_alert"  ref="child"></contact_chat>
    </div>
</template>

<script>
    import contact_chat from '../../alert/contact_chat.vue';
    import ip_link from '../../../../template/ip_link.js';
    export default {
        components:{
            contact_chat
        },
        data () {
            return {
                contacts:ip_link.lists.contacts,
                people_alert:{
                    if_alert:false
                },
            }
        },
        mounted(){
            console.log(ip_link)
        },
        methods:{
            person_alert(e){
                console.log(e)
            },
            select_which(e){
                console.log(e)
            },
            alert_chat(e){
                this.people_alert.if_alert=true;
                this.$refs.child.onChange(e);
            }
        }
    }
</script>
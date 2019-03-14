<style scoped lang="less">

    .modal_alerts{
        .menu_list{
            background-color: #f8f9fb;
            padding: 10px 0 10px 10px ;
        }
        .modal_cntr{
            display: flex;
            margin: -16px;

            /*background: url('../../images/background_img/timg.jpg');*/
        }
        .word_and_head{
            height: 40px;
            margin-bottom: -15px!important;
        }
        .word_and{
            position: relative;
            margin-bottom:10px;
            cursor:pointer;
            text-align: left;
            padding:0;
            .name_big{
                position: absolute;
                top:5px;
                left: 50px;
                font-family: "PingFang SC";
                color: #464c5b;
                font-size: 16px;
                max-width: 140px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .imgs{
                width: 36px;
                height: 36px;
                border-radius: 50%;
            }
        }
        .chat_history{
            width: 100%;
            height: 500px;
            display: flex;
            flex-direction: column;
            .chat_list{
                height: 500px;
                overflow: auto;
            }
            .line_divider{
                height: 2px;
                background-color: #e8e8e8;
                width: 100%;
            }
            .list_for_icon_list{
                display:flex;
                justify-content: space-between;
                .list_for_icon{
                    display: flex;
                    margin:10px 0;
                    i{
                        margin:-5px 12px 12px 12px;
                    }
                }
                .history{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    font-family: "PingFang SC";
                    color: #6a6a6c;
                    font-size: 14px;
                    width: 100px;
                    justify-content: space-around;
                    margin-right: 20px;
                    cursor: pointer;
                }
            }

            .chat_enter{
                display: flex;
                justify-content: flex-end;
                margin: 10px;
                height: 50px;
                align-items: center;
            }
            .chat_input{
                .textarea_css{
                    resize: none;
                    border-right: none;
                    border-left: none;
                    height: 100px;
                    width: 100%;
                    border-bottom: 1px solid #e6e6e6;
                    border-top: 1px solid #e6e6e6;
                    padding: 10px;
                    font-family: "PingFang SC";
                    color: #6a6a6c;
                    font-size: 14px;
                }
            }
        }
    }


</style>


<template>
    <div class="contact_center1">
        <Modal class="modal_alerts" v-model="alert_data.if_alert" width="900" draggable  :mask="false" :mask-closable="false" :footer-hide="true">
            <p slot="header" style="color:#f60;" class="word_and word_and_head">
                <img class="imgs" src="../../../images/people_imgs/1.jpg" alt="">
                <span class="name_big">{{whick_chat_now.name}}</span>
            </p>
            <div style="text-align:center" class="modal_cntr">
                <Menu class="menu_list" :theme="theme3" :active-name="active_id" v-on:on-select="select_which">
                    <MenuItem :name="item.id" v-for="item in alert_datas" class="word_and">
                        <img class="imgs" src="../../../images/people_imgs/1.jpg" alt="">
                        <span class="name_big">{{item.name}}</span>
                    </MenuItem>
                </Menu>
                <div class="chat_history">
                    <div class="chat_list">
                        <!--聊天内容-->
                        <contactChatList :content_data="chat_content"></contactChatList>
                    </div>
                    <div class="line_divider"></div>
                    <div class="list_for_icon_list">
                        <div class="list_for_icon">
                            <Icon size="30" type="ios-happy-outline" />
                            <Icon size="30" type="ios-image-outline" />
                            <Icon size="30" type="ios-folder-open-outline" />
                            <Icon size="30"  type="ios-headset-outline" />
                            <Icon size="30" type="ios-videocam-outline" />
                        </div>
                        <div class="history" v-on:click="click_history">
                            <Icon size="26" type="ios-time-outline" />
                            <contactChatHistory></contactChatHistory>
                        </div>
                    </div>
                    <div class="chat_input">
                        <textarea name="" id="" placeholder="请输入..." class="textarea_css"></textarea>
                    </div>
                    <div class="chat_enter">
                        <Button type="default" style="margin-right: 10px" size="default">关闭</Button>
                        <Button type="success" size="default">发送</Button>
                    </div>
                </div>
            </div>
        </Modal>


    </div>
</template>

<script>
    import contactChatList from './chats/contactChatList.vue'
    import contactChatHistory from './chats/contact_list_li/contactChatHistory.vue'
    export default {
        components:{
            contactChatList,
            contactChatHistory
        },
        props:['alert_data'],
        data () {
            return {
                theme3: 'primary',
                if_show_history:false,
                alert_datas:[

                ],
                whick_chat_now:{},
                active_id:'',    //默认选中的标签id
                chat_content:{   //聊天内容
                    chatList:[]
                },
            }
        },
        mounted(){
            console.log(this.alert_data)
        },
        methods:{
            person_alert(e){
                console.log(e)
            },
            //当list切换选择时
            select_which(e){
                for(let item of this.alert_datas){
                    if(item.id == e){
                        this.chat_content=item;
                        this.whick_chat_now=item;
                    }
                }
            },
            click_history(){
                this.if_show_history=true;
                console.log(this.if_show_history)
            },
            onChange(e){
                //当前选中列表
                this.whick_chat_now=e;
                //当前聊天内容
                this.chat_content=e;

                //当前所有的弹框信息保存
                let if_add=true;
                for(var item of this.alert_datas){
                    if(item.id == e.id){
                        if_add=false;
                    }
                }
                if(if_add == true){
                    this.alert_datas.push(e);
                }


                //当前选中标签
                const that=this;
                setTimeout(function () {
                    that.active_id=e.id;
                },100)
            }
        }
    }
</script>
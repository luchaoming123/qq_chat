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
        <Modal class="modal_alerts" v-model="if_people_alert" width="900" draggable  :mask="false" :mask-closable="false" :footer-hide="true">
            <p slot="header" style="color:#f60;" class="word_and word_and_head">
                <img class="imgs" src="../../../images/people_imgs/1.jpg" alt="">
                <span class="name_big">鲁超明</span>
            </p>
            <div style="text-align:center" class="modal_cntr">
                <Menu class="menu_list" :theme="theme3" active-name="1" v-on:on-select="select_which">
                    <MenuItem name="1" class="word_and">
                        <img class="imgs" src="../../../images/people_imgs/1.jpg" alt="">
                        <span class="name_big">鲁超明</span>
                    </MenuItem>
                    <MenuItem name="2" class="word_and">
                        <img class="imgs" src="../../../images/people_imgs/2.jpg" alt="">
                        <span class="name_big">马云</span>
                    </MenuItem>
                </Menu>
                <div class="chat_history">
                    <div class="chat_list">
                        <contactChatList></contactChatList>
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
                        <Button type="success" style="margin-right: 10px" size="default">取消</Button>
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
        props:['if_people_alert'],
        data () {
            return {
                theme3: 'primary',
                link:'http:www.baidu.com',
                if_show_history:false
            }
        },
        methods:{
            person_alert(e){
                console.log(e)
            },
            select_which(e){
                console.log(e)
            },
            click_history(){
                this.if_show_history=true
                console.log(this.if_show_history)
            }
        }
    }
</script>
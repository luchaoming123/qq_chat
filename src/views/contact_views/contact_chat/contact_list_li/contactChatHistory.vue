<style>
    .demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
</style>

<template>
    <div>
        <div @click="value3 = true">消息记录 </div>
        <Drawer
                title="马云的聊天记录"
                v-model="value3"
                width="520"
                :mask-closable="false"
                :styles="styles"
        >

            <contactChatList></contactChatList>
        </Drawer>
    </div>
</template>
<script>
    import contactChatList from '../contactChatList.vue'
    export default {
        components:{
            contactChatList,
        },
        props:['if_show_history'],
        data () {
            return {
                value3:this.if_show_history,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                },
            }
        },
        methods:{

        }
    }
</script>

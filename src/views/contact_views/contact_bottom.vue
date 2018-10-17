<style scoped lang="less">
    .contact_bottom{
        display: flex;
        justify-content: space-around;
        background-color: #F6F6F6;
        border-radius: 0 0 2px 2px;
        height:40px;
        align-items: center;
        i{
            cursor: pointer;
        }
    }
</style>


<template>
    <div class="contact_bottom">
        <Icon size="24" type="ios-search-outline" />
        <div>
            <Badge :count="510" overflow-count="99" type="success">
                <Icon size="24" type="ios-chatboxes-outline" />
            </Badge>
        </div>
        <Icon size="24" type="ios-add-circle-outline" />
        <div>
            <Icon size="24"  @click="shirt = true" type="ios-shirt-outline" />
            <Modal
                    v-model="shirt"
                    @on-ok="shirt_ok"
                    @on-cancel="shirt_cancel">
                <p>
                    <ColorPicker v-model="color3" alpha />
                </p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
            </Modal>
        </div>
        <Icon size="24" type="ios-information-circle-outline" />
    </div>
</template>


<script>
    export default {
        data () {
            return {
                shirt: false,
                color3:'#ffffff'
            }
        },
        methods:{
            shirt_click:()=>{

            },
            shirt_ok () {
                this.$Message.info('修改聊天主题成功');
            },
            shirt_cancel () {
                this.$Message.info('取消修改成功');
            }
        }
    }
</script>
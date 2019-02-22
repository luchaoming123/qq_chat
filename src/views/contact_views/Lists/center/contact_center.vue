<style scoped lang="less">
    .contact_center{
        .tabpane{
            margin-top: -16px;
            height: 370px;
            overflow-y: auto;
            background-color: #ffffff;
        }
    }
</style>


<template>
    <div class="contact_center">
        <Tabs size="small"  value="name1">
            <TabPane class="tabpane" label="联系人" icon="ios-person" name="name1">
                <contact_center1></contact_center1>
            </TabPane>
            <TabPane class="tabpane" label="群聊" icon="md-person" name="name2"></TabPane>
            <TabPane class="tabpane" label="消息" icon="md-chatbubbles" name="name3"></TabPane>
        </Tabs>
    </div>
</template>

<script>
    import contact_center1 from './contact_center1.vue'
    export default {
        components:{
            contact_center1
        },
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        }
    }
</script>
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
            <Panel name="1">
                同学
                <p slot="content" class="word_and"  @click="people_alert = true" data-num="发发发发">

                    <img class="imgs" src="../../../../images/people_imgs/1.jpg" alt="">
                    <span class="name">鲁超明</span>
                    <span class="word">曾经沧海难为水</span>
                </p>
                <p slot="content" class="word_and">

                    <img class="imgs" src="../../../../images/people_imgs/2.jpg" alt="">
                    <span class="name">马云</span>
                    <span class="word">乡春教师，慈善家，口才好，有前途</span>
                </p>
                <p slot="content" class="word_and">

                    <img class="imgs" src="../../../../images/people_imgs/3.jpg" alt="">
                    <span class="name">李玉梅</span>
                    <span class="word">世界首富</span>
                </p>
                <p slot="content" class="word_and">

                    <img class="imgs" src="../../../../images/people_imgs/4.jpg" alt="">
                    <span class="name">刘立博</span>
                    <span class="word">阿里巴巴创始人</span>
                </p>
            </Panel>
            <Panel name="2">
                同事
                <p slot="content"></p>
            </Panel>
            <Panel name="3">
                朋友
                <p slot="content"></p>
            </Panel>
        </Collapse>



        <contact_chat :if_people_alert="people_alert"></contact_chat>
    </div>
</template>

<script>
    import contact_chat from '../../alert/contact_chat.vue'
    export default {
        components:{
            contact_chat
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
                },
                people_alert:false,
                theme3: 'primary',
                link:'http:www.baidu.com'
            }
        },
        methods:{
            person_alert(e){
                console.log(e)
            },
            select_which(e){
                console.log(e)
            }
        }
    }
</script>
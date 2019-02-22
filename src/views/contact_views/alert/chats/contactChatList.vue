<style scoped lang="less">
    .chatList{

        .left_word{
            display: flex;
            padding:10px 0 10px 20px;
            .imgs{
                border-radius: 50%;
                width: 40px;
                height: 40px;

            }
            .contents{
                display: flex;
                flex-direction: column;
                padding:0 0 0 10px;
                .title{
                    display: flex;
                    margin-bottom:5px;
                    .name{
                        padding-right: 40px;
                    }
                }
                .content_detail{
                    background-color: #F6F6F6;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 1px 1px 5px rgba(0,0,0,.3);
                }
            }
        }


        .right_word{
            display: flex;
            flex-direction: row-reverse;
            padding:10px 20px 10px 10px;
            .imgs{
                border-radius: 50%;
                width: 40px;
                height: 40px;

            }
            .contents{
                display: flex;
                flex-direction: column;
                padding:0 10px 0 0 ;
                .title{
                    display: flex;
                    margin-bottom:5px;
                    .name{
                        padding-right: 40px;
                    }
                }
                .content_detail{
                    background-color: #cfffe7;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 1px 1px 5px rgba(0,0,0,.3);
                }
            }
        }
    }
</style>


<template>
    <div class="chatList" style="">
        <div v-for="item in chatList">

            <div v-if="item.left_or_right == 'left'" class="left_word">
                <div class="">
                    <img class="imgs" src="../../../../images/people_imgs/2.jpg" alt="">
                </div>
                <div class="contents">
                    <div class="title">
                        <div class="name">{{item.name}}</div>
                        <div>{{item.date}}</div>
                    </div>
                    <div class="content_detail">
                        {{item.content}}
                    </div>
                </div>
            </div>

            <div v-if="item.left_or_right == 'right'" class="right_word">
                <div class="">
                    <img class="imgs" src="../../../../images/people_imgs/1.jpg" alt="">
                </div>
                <div class="contents">
                    <div class="title">
                        <div class="name">{{item.name}}</div>
                        <div>{{item.date}}</div>
                    </div>
                    <div class="content_detail">
                        {{item.content}}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>

    export default {
        components:{

        },
        data () {
            return {
                chatList: [
                    {
                        left_or_right:'left',
                        date:'2018-09-20 13:55:42',
                        name:'马云',
                        content:'洗澡中，请勿打扰：一般人我不告诉他！[哈哈]',
                        img:'../../../../images/people_imgs/1.jpg'
                    },
                    {
                        left_or_right:'right',
                        date:'2018-09-20 13:55:42',
                        name:'鲁超明',
                        content:'洗澡中，请勿打扰：一般人我不告诉他！[哈哈]'
                    },
                    {
                        left_or_right:'left',
                        date:'2018-09-20 13:55:42',
                        name:'马云',
                        content:'洗澡中，请勿打扰：一般人我不告诉他！[哈哈]'
                    },
                    {
                        left_or_right:'right',
                        date:'2018-09-20 13:55:42',
                        name:'鲁超明',
                        content:'洗澡中，请勿打扰：一般人我不告诉他！[哈哈]'
                    },

                ],
            }
        },
        methods: {

        }
    }
</script>
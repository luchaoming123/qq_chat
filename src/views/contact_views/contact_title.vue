<style scoped lang="less">
    .title_box{
        padding: 10px;
        font-family: 'PingFang SC';
        font-size: 16px;
        color: #464c5b;

    }
</style>


<template>
    <div class="title_box">
        <Row>
            <Col span="8">
                <span>纸飞机</span>
                <!--<span><Icon type="md-remove-circle" style="margin-bottom: 2px" color="#DD691D"/></span>-->
                <Dropdown placement="bottom-start" trigger="click">
                    <a href="javascript:void(0)">
                        <Icon type="ios-checkmark-circle" style="margin-bottom: 2px" color="#3FDD86"/>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem> <Icon type="ios-checkmark-circle" style="margin-bottom: 2px" color="#3FDD86"/>&nbsp;&nbsp;在线</DropdownItem>
                        <DropdownItem> <Icon type="md-remove-circle" style="margin-bottom: 2px" color="#DD691D"/>&nbsp;&nbsp;隐身</DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </Col>
            <Col span="3" offset="13"><Icon size="30" type="ios-close" /></Col>
        </Row>
        <Row>
            <Col span="24">
                <Input  size="small" placeholder="我的标签..." value="在深邃的编码世界，做一枚轻盈的纸飞机"/>
            </Col>
        </Row>
    </div>
</template>


<script>
    export default {
        methods: {

        }
    }
</script>
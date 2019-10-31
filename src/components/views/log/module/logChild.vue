<template>
    <div class="v_log_child">
        <el-input placeholder="请输入一些信息..." v-model="getData.radio3"></el-input>
    </div>
</template>
<script>
export default {
    // 子组件：依赖注入
    inject: {
        getData: {
            default: 'getData'
        }
    },
    // inject: ['getData'],
    data() {
        return {}
    },
    created() {
        console.log('子组件=============', this.getData, JSON.stringify(this.getData))
    },
    watch: {
        'getData.radio3': function(newVal, oldVal) {
            console.log('监听getData=============', newVal)
        }
    }    
}
</script>
<style lang="scss">
.v_log_child {

}
</style>
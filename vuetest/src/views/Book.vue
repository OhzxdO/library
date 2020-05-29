<template>
<!--    只允许有一个根节点-->
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>图书名称</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.author}}</td>
                <td>{{item.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    // 所有的方法都得在这写
    export default {
        name: "Book.vue",
        created() {
            const _this = this
            axios.get("http://localhost:8181/book/findAll").then(function (response) {
                _this.books = response.data;
            })

        },
        data(){
            return{
                books: []
            }
        }
    }
</script>

<style scoped>

</style>

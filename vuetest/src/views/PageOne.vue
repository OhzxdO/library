<template>
    <div>
        <el-table :data="tableData" border max-height="600px" style="width: 74%">
            <el-table-column prop="id" label="编号" width="100">
            </el-table-column>
            <el-table-column prop="name" label="图书名" width="150">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="130">
            </el-table-column>
            <el-table-column prop="publish" label="出版社" width="120">
            </el-table-column>
            <el-table-column prop="pages" label="页码" width="100">
            </el-table-column>
            <el-table-column prop="price" label="价格" width="120">
            </el-table-column>
            <el-table-column :fit="true" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="total"
            @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "PageOne",
        methods: {
            page(currentPage) {
                const _this = this;
                axios.get("http://localhost:8181/book/findAll/" + (currentPage - 1) + "/" + this.pageSize).then(
                    function (response) {
                        _this.tableData = response.data.content;
                    })
            },
            edit(row) {
                this.$router.push({
                    path: "/pagethree",
                    query: {
                        info: row
                    }
                });
            },
            remove(row) {
                const _this = this;
                axios.delete("http://localhost:8181/book/delete/" + row.id).then(function (response) {
                    if (response.data === 'sucessful') {
                        _this.$message("删除成功.");
                        // 跳转不起作用,本来就是当前路径
                        // _this.$router.push("/pageone");
                        window.location.reload();
                    }
                })
            }
        },
        created() {
            const _this = this;
            axios.get("http://localhost:8181/book/findAll/0/6").then(function (response) {
                _this.tableData = response.data.content;
                _this.total = response.data.totalElements;
                _this.pageSize = response.data.size;
            })
        },
        data() {
            return {
                tableData: [],
                pageSize: 0,
                total: 0
            }
        }
    }
</script>

<style scoped>

</style>
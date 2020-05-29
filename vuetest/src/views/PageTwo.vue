<template>

    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="作者" prop="author">
            <el-input type="textarea" v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item label="出版社" prop="publish">
            <el-input v-model="ruleForm.publish"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
        name: "PageTwo",
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: '',
                    publish: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入图书名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请填写作者名字', trigger: 'blur' }
                    ],
                    publish: [
                        { required: true, message: '请输入出版社名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ]
                }
            };
        },


        methods: {
            submitForm(formName) {
                const _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post("http://localhost:8181/book/save",this.ruleForm).then(function (response) {
                            if (response.data === 'sucessful') {
                                _this.$message('添加成功!');
                                _this.$router.push('/pageone');
                            }
                        });
                    } else {
                        this.$message('输入错误!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>

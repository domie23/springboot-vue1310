const base = {
    get() {
        return {
            url : "http://localhost:8080/chongwushangcheng/",
            name: "chongwushangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chongwushangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物商城网站系统"
        } 
    }
}
export default base

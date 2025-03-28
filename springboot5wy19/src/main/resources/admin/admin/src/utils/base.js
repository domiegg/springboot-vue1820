const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5wy19/",
            name: "springboot5wy19",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot5wy19/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "画师约稿平台"
        } 
    }
}
export default base

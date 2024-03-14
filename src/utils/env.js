let BASE_URL;
//开发环境中
const BASE_URLS={
	"development":"http://xxxx" ,//开发环境请求地址
	"production":"http://xxxx" ,//生产环境请求地址
	"test":"http://xxxx" ,//测试环境请求地址
}
BASE_URL = BASE_URL[process.env.NODE_ENV]
export default BASE_URL
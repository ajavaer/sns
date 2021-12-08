
var app = new Vue({
    el: '#pageData',
    data: function () {
        return {
            showPopup: false,
            adminDialog: false,
            dataList: []
        }
    },
    mounted() {
        let that = this
        axios.get("/center.php?s=project/list")
            .then(function (res) {
                let nowTime = new Date().getTime() / 1000
                if (res.data.code == 0) {
                    for (let i in res.data.data) {
                        res.data.data[i].editmark = false
                        let domainurl = ''
                        let adminurl = ''
                        if (res.data.data[i].self_domain) {
                            domainurl = res.data.data[i].self_domain
                            adminurl = res.data.data[i].self_domain + "/" + res.data.data[i].admin_url
                        } else {
                            domainurl = res.data.data[i].domain
                            adminurl = res.data.data[i].domain + "/" + res.data.data[i].admin_url
                        }
                        res.data.data[i].domain = domainurl
                        res.data.data[i].admin_url = adminurl
                        if (res.data.data[i].endtime) {
                            res.data.data[i].endpercent = parseInt((res.data.data[i].endtime - nowTime) * 100 / (res.data.data[i].endtime - res.data.data[i].opentime))
                            console.log(res.data.data[i])
                        }

                    }
                    that.dataList = res.data.data
                }

            }, function (err) {
                console.log(err);
            })
    },
    methods: {
        handleClose() {

        },
        projectMenu(index, key) {
            let data = this.dataList[index]
            switch (key) {
                case 'web':
                    window.open(data.domain, '_blank')
                    break;
                case 'admin':
                    window.open(data.admin_url, '_blank')
                    break;
                case 'admin_info':

                    break;
                default:
                    break;

            }

        },
        fmtTime(time, fmt) {
            time -= 0;
            if (("" + time).length === 10) {
                time *= 1000;
            }
            let date = new Date(time)
            let ret;
            const opt = {
                "Y+": date.getFullYear().toString(), // 年
                "m+": (date.getMonth() + 1).toString(), // 月
                "d+": date.getDate().toString(), // 日
                "H+": date.getHours().toString(), // 时
                "M+": date.getMinutes().toString(), // 分
                "S+": date.getSeconds().toString() // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                }
                ;
            }
            ;
            return fmt;
        },
    }
})
const $ = new Env('工厂');
/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response.
 *
 */

//京喜工厂
let codeStr = 'tyQKTQhZ2ZY_PmgUVhOAlQ==@bO9ECfdOCL-WSB35Q33Oow==@vel8Qo11M4KIjnfbSbjRUA==@KAjN_BG8tMqe_h0f-kKd8Q==@pgg1hRm3G1iR3CaICU-JQw==';
let array = codeStr.split("@");

//种豆得豆
let bcodeStr = 'xzvixhxjyibm2bkqdet2oet5svwoe4qjgcrwnvi@olmijoxgmjutzipbogwuz67bv3aettbnws7xu5q@xvmz36xlz4egpqokgfkupb77ze@nkvdrkoit5o64a5kmibxt2homj5ab3n425l4c2y@tdgojfjehwryixkqojijz2rdaf5kjrm6zhpefkq@jecu6w7qbrqulexj5f4eepaebm@olmijoxgmjutzc3rvbnp5b7kahln5bfydvdvqva';
let barray = bcodeStr.split("@");

//农场
let fcodeStr = '70f727dfc5234347a71b0913467748b5@9ad01bcaa9dd4ca69edbbea7f3178485'
let farray = fcodeStr.split("@");

//宠物
let pcodeStr = 'MTAxODc2NTEzNTAwMDAwMDAyOTM2NjEwOQ==@MTAxODc2NTEzNTAwMDAwMDAzMDczOTU0NQ==@MTAxODc2NTE0NzAwMDAwMDAzMjc2NDQ0Nw==@MTE1NDQ5OTIwMDAwMDAwMzQ2NDk5NDE='
let parray = pcodeStr.split("@");

//东东工厂
let ddarray = [];

(async function () {
    await jxfactory();
    await ddfactory();
    await bean();
    await farm();
    await pet();
})()

function jxfactory() {
    return new Promise(resolve => {
        (async function todo() {
            for (let i = 0; i < array.length; i++) {
                console.log('执行非lxk惊喜助力池')
                await signin(i)
                await sleep(5)
                console.log('执行lxk惊喜助力池')
                await help("jxfactory", array[i])
            }
            resolve()
        })()
    })
}


function ddfactory() {
    return new Promise(resolve => {
        (async function toddfactory() {
            if (ddarray.length > 0) {
                console.log('执行lxk东东工厂助力池')
                for (let i = 0; i < ddarray.length; i++) {
                    await sleep(5)
                    await help("ddfactory", ddarray[i])
                }
                resolve()
            } else {
                resolve()
            }
        })()
    })

}


function bean() {
    return new Promise(resolve => {
        (async function toBean() {
            console.log('执行lxk种豆助力池')
            for (let i = 0; i < barray.length; i++) {
                await sleep(5)
                await help("bean", barray[i])
            }
            resolve()
        })()
    })

}


function farm() {
    return new Promise(resolve => {
        (async function tofarm() {
            console.log('执行lxk农场助力池');
            for (let i = 0; i < farray.length; i++) {
                await sleep(5)
                await help("farm", farray[i])
            }
            resolve();
        })()
    })

}


function pet() {
    return new Promise(resolve => {
        (async function topet() {
            console.log('执行lxk宠物助力池');
            for (let i = 0; i < parray.length; i++) {
                await sleep(5)
                await help("pet", parray[i])
            }
        })()
    })

}

function signin(i) {
    return new Promise(resolve => {

        let code = array[i]
        let name = "hui" + i
        const url = `https://api.ninesix.cc/jx-factory/${code}/${name}`;

        const myRequest = {
            url: url,
        };

        $.get(myRequest, (err, res, body) => {
            console.log('惊喜工厂:', body);
            resolve()
        })

    })
}

//lxk助力池
function help(key, code) {
    return new Promise(resolve => {

        function taskUrl() {
            return {
                url: `http://api.turinglabs.net/api/v1/jd/${key}/create/${code}`,
            };
        }

        let request = taskUrl()
        /*$.get(request).then(response => {
            // response.statusCode, response.headers, response.body
            console.log(`\n🔥${key} -- ${code}`)
            console.log(response.body);// Success!
            resolve()
        }, reason => {
            // reason.error
            console.log(reason.error); // Error!
        });*/
        $.get(request, (err, res, body) => {
            console.log(`🔥${key} -- ${code}`);
            console.log(body);
            resolve()

        })

    })
}
//等待一下
function sleep(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, s * 1000);
    })
}

//初始化函数
function Env(t, s) {
    return new class {
        constructor(t, s) {
            this.name = t, this.data = null, this.dataFile = "box.dat", this.logs = [], this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, s), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        getScript(t) {
            return new Promise(s => {
                $.get({url: t}, (t, e, i) => s(i))
            })
        }

        runScript(t, s) {
            return new Promise(e => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                o = o ? 1 * o : 20, o = s && s.timeout ? s.timeout : o;
                const [h, a] = i.split("@"), r = {
                    url: `http://${a}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: o},
                    headers: {"X-Key": h, Accept: "*/*"}
                };
                $.post(r, (t, s, i) => e(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), s = this.path.resolve(process.cwd(), this.dataFile),
                    e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s);
                if (!e && !i) return {};
                {
                    const i = e ? t : s;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), s = this.path.resolve(process.cwd(), this.dataFile),
                    e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s), o = JSON.stringify(this.data);
                e ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(s, o) : this.fs.writeFileSync(t, o)
            }
        }

        lodash_get(t, s, e) {
            const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
            let o = t;
            for (const t of i) if (o = Object(o)[t], void 0 === o) return e;
            return o
        }

        lodash_set(t, s, e) {
            return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}, t)[s[s.length - 1]] = e, t)
        }

        getdata(t) {
            let s = this.getval(t);
            if (/^@/.test(t)) {
                const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t), o = e ? this.getval(e) : "";
                if (o) try {
                    const t = JSON.parse(o);
                    s = t ? this.lodash_get(t, i, "") : s
                } catch (t) {
                    s = ""
                }
            }
            return s
        }

        setdata(t, s) {
            let e = !1;
            if (/^@/.test(s)) {
                const [, i, o] = /^@(.*?)\.(.*?)$/.exec(s), h = this.getval(i),
                    a = i ? "null" === h ? null : h || "{}" : "{}";
                try {
                    const s = JSON.parse(a);
                    this.lodash_set(s, o, t), e = this.setval(JSON.stringify(s), i)
                } catch (s) {
                    const h = {};
                    this.lodash_set(h, o, t), e = this.setval(JSON.stringify(h), i)
                }
            } else e = $.setval(t, s);
            return e
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, s) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = t, this.writedata(), !0) : this.data && this.data[s] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, s = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, e, i) => {
                !t && e && (e.body = i, e.statusCode = e.status), s(t, e, i)
            }) : this.isQuanX() ? $task.fetch(t).then(t => {
                const {statusCode: e, statusCode: i, headers: o, body: h} = t;
                s(null, {status: e, statusCode: i, headers: o, body: h}, h)
            }, t => s(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, s) => {
                try {
                    const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                    this.ckjar.setCookieSync(e, null), s.cookieJar = this.ckjar
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: e, statusCode: i, headers: o, body: h} = t;
                s(null, {status: e, statusCode: i, headers: o, body: h}, h)
            }, t => s(t)))
        }

        post(t, s = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) $httpClient.post(t, (t, e, i) => {
                !t && e && (e.body = i, e.statusCode = e.status), s(t, e, i)
            }); else if (this.isQuanX()) t.method = "POST", $task.fetch(t).then(t => {
                const {statusCode: e, statusCode: i, headers: o, body: h} = t;
                s(null, {status: e, statusCode: i, headers: o, body: h}, h)
            }, t => s(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: e, ...i} = t;
                this.got.post(e, i).then(t => {
                    const {statusCode: e, statusCode: i, headers: o, body: h} = t;
                    s(null, {status: e, statusCode: i, headers: o, body: h}, h)
                }, t => s(t))
            }
        }

        time(t) {
            let s = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in s) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? s[e] : ("00" + s[e]).substr(("" + s[e]).length)));
            return t
        }

        msg(s = t, e = "", i = "", o) {
            const h = t => !t || !this.isLoon() && this.isSurge() ? t : "string" == typeof t ? this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : void 0 : "object" == typeof t && (t["open-url"] || t["media-url"]) ? this.isLoon() ? t["open-url"] : this.isQuanX() ? t : void 0 : void 0;
            this.isSurge() || this.isLoon() ? $notification.post(s, e, i, h(o)) : this.isQuanX() && $notify(s, e, i, h(o)), this.logs.push("", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="), this.logs.push(s), e && this.logs.push(e), i && this.logs.push(i)
        }

        log(...t) {
            t.length > 0 ? this.logs = [...this.logs, ...t] : console.log(this.logs.join(this.logSeparator))
        }

        logErr(t, s) {
            const e = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            e ? $.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : $.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }

        wait(t) {
            return new Promise(s => setTimeout(s, t))
        }

        done(t = {}) {
            const s = (new Date).getTime(), e = (s - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, s)
}
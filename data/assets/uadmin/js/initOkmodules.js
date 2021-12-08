// 扩展模块别名
var okmodules = {
    "okTab": "okmodules/okTab",
    "okCountUp": "okmodules/okCountUp",
    "okUtils": "okmodules/okUtils",
    "okFly": "okmodules/okFly",
    "okGVerify": "okmodules/okGVerify",
    "qrcode": "okmodules/qrcode",
    "okQrcode": "okmodules/okQrcode",
    "okAddlink": "okmodules/okAddlink",
    "okLayer": "okmodules/okLayer",
    "okMock": "okmodules/okMock",
    "okContextMenu": "okmodules/okContextMenu",
    "okCookie": "okmodules/okCookie",
    "okMd5": "okmodules/okMd5",
    "okToastr": "okmodules/okToastr",
    "okBarcode": "okmodules/okBarcode",
    "okNprogress": "okmodules/okNprogress",
    "okSweetAlert2": "okmodules/okSweetAlert2",
    "okHoliday": "okmodules/okHoliday",
    "okLayx": "okmodules/okLayx",
    "jqprint": "okmodules/jqprint",
};
layui.config({
    base: '/assets/uadmin/js/' //扩展模块所在目录
}).extend(okmodules); // 加载扩展
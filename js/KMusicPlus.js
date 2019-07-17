// JavaScript Document
//加载项
$(document).ready(function () {
    "use strict";
    //设置位置可以移动
    $(function () {
        bindDrag($("#KMusicPlayerPlus")[0]);
    });

    function bindDrag(el) {
        var els = el.style,
            x = 0,
            y = 0;
        $(el).mousedown(function (e) {
            x = e.pageX - el.offsetLeft;
            y = e.pageY - el.offsetTop;
            $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
        });

        function mouseMove(e) {
            els.left = e.pageX - x + 'px';
            els.top = e.pageY - y + 'px';
        }

        function mouseUp() {
            $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
        }
    }
    //添加音乐播放器
    $("#KMusicPlayerPlus").append("<audio id='KAudio' src=''></audio>");
    //添加音乐
    $("#KAudio").attr({
        src: songSrc[pos]
    });
});
//歌单被双击时播放
$(".KMLItem").dblclick(function () {
    "use strict";
    $("#KMLItems" + pos + ">div>i").removeClass("fa fa-spinner fa-spin");
    $("#KOnAndOff").removeClass("fa-pause-circle");
    $("#KMPBg, #KMLBg").removeClass("KMLIImg"+pos);
    var ItemID = $(this).attr("id");
    var p = ItemID.lastIndexOf('s');
    pos = parseInt(ItemID.substr(p + 1));
    $("#KAudio").attr("src", songSrc[pos]);
    KMusicInfoChange();
    document.getElementById("KAudio").play();
    $("#" + ItemID + ">div>i").addClass("fa fa-spinner fa-spin");
    $("#KMPBg, #KMLBg").addClass("KMLIImg"+pos);
    $("#KOnAndOff").toggleClass("fa-pause-circle");
});
//播放键按钮动画
$("#KOnAndOff").click(function () {
    "use strict";
    $(this).toggleClass("fa-pause-circle");
    var audio = document.getElementById("KAudio");
    if (audio.paused) {
        audio.play();
        $("#KMLItems" + pos + ">div>i").addClass("fa fa-spinner fa-spin");
        $("#KMPBg, #KMLBg").addClass("KMLIImg"+pos);
        KMusicInfoChange();
    } else {
        audio.pause();
        $("#KMLItems" + pos + ">div>i").removeClass("fa fa-spinner fa-spin");
    }
});
//歌曲信息变化
function KMusicInfoChange() {
    "use strict";
    $("#KMName").text(function () {
        return song[pos];
    });
    $("#KMSinger").text(function () {
        return singer[pos];
    });
}
//歌单按钮动画
var ListTap = 0;
$("#KListShowAndHide").click(function () {
    "use strict";
    if (ListTap === 0) {
        $("#KMusicList").fadeIn(400);
        ListTap = 1;
    } else {
        $("#KMusicList").fadeOut(600);
        ListTap = 0;
    }
});
$("#KListShowAndHide").mousedown(function () {
    "use strict";
    $(this).css("transform", "scale(1.25)");
});
$("#KListShowAndHide").mouseout(function () {
    "use strict";
    $(this).css("transform", "scale(1.25)");
});
$("#KListShowAndHide").mouseup(function () {
    "use strict";
    $(this).css("transform", "scale(1.5)");
});
$("#KListShowAndHide").mouseover(function () {
    "use strict";
    $(this).css("transform", "scale(1.5)");
});
//收缩播放器
function shrink() {
    "use strict";
    if ($("#KMusicList").css("display") !== "none") {
        $("#KMusicList").fadeOut(600);
        ListTap = 0;
    }
    $(".KMPPart").fadeOut(200);
    setTimeout(function () {
        $("#KMPBg, #KMPlayer").animate({
            width: "80px"
        }, 500);
    }, 100);
    setTimeout(function () {
        $("#KMPBg").css("filter", "none");
        var audio = document.getElementById("KAudio");
        if (audio.paused) {
            $("#KMPBg").removeClass("KRotateBG");
        } else {
            $("#KMPBg").addClass("KRotateBG");
        }
        $("#KMPBg").addClass("KBasicLook");
        $("#KMPBg").css("z-index", "1");
    }, 600);
}
//还原播放器
function restore() {
    "use strict";
    $("#KMPBg").css("z-index", "-1");
    $("#KMPBg").css("filter", "blur(10px)");
    $("#KMPBg").removeClass("KRotateBG");
    $("#KMPBg, #KMPlayer").animate({
        width: "330px"
    }, 500);
    $(".KMPPart").fadeIn(500);
}
//音乐播放器中文字信息被点击动画
$("#KMName, #KMSinger").click(function () {
    "use strict";
    shrink();
});
$("#KMPBg").click(function () {
    "use strict";
    restore();
});
//点击下一首
$("#KNext").click(function () {
    "use strict";
    $("#KMLItems" + pos + ">div>i").removeClass("fa fa-spinner fa-spin");
    $("#KOnAndOff").removeClass("fa-pause-circle");
    $("#KMPBg, #KMLBg").removeClass("KMLIImg"+pos);
    if (pos === 0) {
        pos = MAX + 1;
    }
    $("#KAudio").attr("src", songSrc[--pos]);
    KMusicInfoChange();
    document.getElementById("KAudio").play();
    $("#KMLItems" + pos + ">div>i").addClass("fa fa-spinner fa-spin");
    $("#KMPBg, #KMLBg").addClass("KMLIImg"+pos);
    $("#KOnAndOff").toggleClass("fa-pause-circle");
});
//点击上一首
$("#KPrevious").click(function () {
    "use strict";
    $("#KMLItems" + pos + ">div>i").removeClass("fa fa-spinner fa-spin");
    $("#KOnAndOff").removeClass("fa-pause-circle");
    $("#KMPBg, #KMLBg").removeClass("KMLIImg"+pos);
    if (pos === MAX) {
        pos = -1;
    }
    $("#KAudio").attr("src", songSrc[++pos]);
    KMusicInfoChange();
    document.getElementById("KAudio").play();
    $("#KMLItems" + pos + ">div>i").addClass("fa fa-spinner fa-spin");
    $("#KMPBg, #KMLBg").addClass("KMLIImg"+pos);
    $("#KOnAndOff").toggleClass("fa-pause-circle");
});
//自动播放
setInterval(function () {
    "use strict";
    var audio = document.getElementById("KAudio");
    if (audio.ended) {
        $("#KMLItems" + pos + ">div>i").removeClass("fa fa-spinner fa-spin");
        $("#KMPBg, #KMLBg").removeClass("KMLIImg"+pos);
        if (pos === 0) {
            pos = MAX + 1;
        }
        $("#KAudio").attr("src", songSrc[--pos]);
        KMusicInfoChange();
        audio.play();
        $("#KMLItems" + pos + ">div>i").addClass("fa fa-spinner fa-spin");
        $("#KMPBg, #KMLBg").addClass("KMLIImg"+pos);
    }
}, 1);
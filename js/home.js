/**
 * Created by SDX on 2014/9/4.
 * vision:1.0
 * title:
 * e-mail:jrshenduxian@jd.com
 */
$(function () {
    //顶部轮播
    var $slideHolder = $("#slider");
    var $scrollHolder = $("#scrollHolder");
    var $pagination = $("#slideCircle");
    var myWebSlider = new WebSlider({
        slideHolder: $slideHolder,
        scrollHolder: $scrollHolder,
        pagination: $pagination,
        loop:true,
        currentClass: "swiper-active-switch"
    });

    //分类滚动
    var $slideHolder = $("#category");
    var $scrollHolder = $("#categoryWrap");
    var $pagination = $("#categoryCircle");
    var myWebSlider = new WebSlider({
        slideHolder: $slideHolder,
        scrollHolder: $scrollHolder,
        pagination: $pagination,
        currentClass: "swiper-active"
    });

    //回到顶部和定位导航栏目
    goToTop($("#goTop"));
})
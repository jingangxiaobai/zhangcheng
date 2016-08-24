/**
 * Created by Administrator on 2016/8/24.
 */
var fss;
$(function () {
    fss = new ddfullscreenslider({
        sliderid: 'dowebok',
        onslide: function ($slide, index) {
            if (index == 0) {
                $(".about").fadeIn(1500);
            } else if (index == 1) {
                $(".skill_text").fadeIn("slow");
                $("#list1").animate({width: "90%"}, 2000);
                $("#list2").animate({width: "50%"}, 2000);
                $("#list3").animate({width: "40%"}, 2000);
                $("#list4").animate({width: "35%"}, 2000);
                $("#list5").animate({width: "30%"}, 2000);
                $("#list6").animate({width: "25%"}, 2000);
                $("#list7").animate({width: "20%"}, 2000);
            }else if (index == 2) {
                $(".demo").fadeIn(1500);
/*                $(".demo_list").mouseover(function(){

                    $(this).find("div").css("display","block");
                    $(this).find("div").find("span").fadeIn("slow");
                });
                $(".demo_list").mouseout(function(){
                    $(this).find("div").css("display","none");
                })*/
            }
            else if (index == 3) {
                $(".reason").fadeIn(1500);
                $("#reason_tab_bar1").click(function () {
                    $(".reason_tab_list1").show();
                    $(".reason_tab_list2").hide();
                    $("#reason_tab_bar1").css({"background-color": "#fff", "color": "#993366"});
                    $("#reason_tab_bar2").css({"background-color": "transparent", "color": "#fff"});

                });
                $("#reason_tab_bar2").click(function () {
                    $(".reason_tab_list2").show();
                    $(".reason_tab_list1").hide();
                    $("#reason_tab_bar2").css({"background-color": "#fff", "color": "#993366"});
                    $("#reason_tab_bar1").css({"background-color": "transparent", "color": "#fff"});
                });
            }
        }
    });
});


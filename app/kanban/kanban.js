jQuery(document).ready(function(){
  $("body").on("click", ".group a", function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log("create task");
    $(this).closest(".group").find(".cards")
      .append('<div class="card">测试标题</div>');
    return false;
  });

  // IE11需要特殊设置 cards 的 max-height
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("trident") != -1 || ua.indexOf("msie") != -1) {
    console.log("IE browser userAgent = " + navigator.userAgent);
    var $kb = $(".cram");
    var sh = 0;
    $(window).resize(function resize(){
      console.log("window resize");
      var th = $kb.height();  // 看板总高
      $kb.find(".cards").each(function(){
        var $this = $(this);
        if(!sh){
          // 计算分组的头部和底部的高度
          $this.siblings().each(function(){
            sh += $(this).height();
          });
        }
        console.log("th=" + th + ",sh=" + sh);
        $this.css("max-height", (th - sh) + "px");
      });
    }).trigger('resize');
  };
});
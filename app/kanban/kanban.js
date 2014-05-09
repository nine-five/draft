jQuery(document).ready(function(){
  // 看板容器
  var $kb = $(".cram");

  // 新建或删除卡片
  $(".kb").on("click", ".createCard, .deleteCard", function(e){
    e.stopPropagation();
    e.preventDefault();

    var $this = $(this);
    if($this.is(".createCard")){
      console.log("create card");
      $this.closest(".group").find(".cards")
        .append('<div class="card">测试标题</div>');
    }else{
      console.log("delete card");
      $this.closest(".group").find(".card:last").remove();
    }
    return false;
  });

  // 新建分组
  $(".createGroup").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log("create group");

    $kb.append('<div class="group vlayout unflex">' +
      ' <div class="header unflex"><h2><i class="fa fa-heart"></i> 测试</h2></div>' +
      ' <div class="cards autoflex scrollbar">' +
      '   <div class="card">测试</div>' +
      '   <div class="card">测试</div>' +
      ' </div>' +
      ' <div class="bottom unflex">' +
      '   <a href="#" class="createCard"><i class="fa fa-plus"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;' +
      '   <a href="#" class="deleteCard"><i class="fa fa-minus"></i></a>' +
      ' </div>' +
      '</div>');
    $kb.animate({scrollLeft: $kb[0].scrollWidth}, 1000);

    return false;
  });

  // 删除分组
  $(".deleteGroup").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log("delete group");
    $kb.find(".group:last").remove();
    return false;
  });

  // IE11需要特殊设置 cards 的 max-height
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("trident") != -1 || ua.indexOf("msie") != -1) {
    console.log("IE browser userAgent = " + navigator.userAgent);
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


App.Event = (function($) {

  function send() {
    var content = $('#inputMsg').val()
    var $msgList = $('#msgList')

    var wrapper =
    '<li class="msg-item right clearfix">\
      <img class="portrait" src="./images/girl4.jpg" alt="">\
      <span class="desc">'+ content +'</span>\
    </li>'

    $msgList.append(wrapper)
  }

  function bindSendClick() {
    $('#btnSend').click(function() {
      send()
    })
  }

  function bindOnFocus() {
     var $inputs = $('input')

     $inputs.focus(function() {
       $(this).addClass('focus')
     })

     $inputs.blur(function() {
       $(this).removeClass('focus')
     })

  }

  function bindKeyboard() {
    $('#inputMsg').keypress(function(e) {
      var keycode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if (keycode == 13) {
          send()
        }
    })
  }

  function init() {
    bindSendClick()
    bindOnFocus()
    bindKeyboard()
  }

  return {
    init: init,
    bindSendClick: bindSendClick,
    bindOnFocus: bindOnFocus,
    bindKeyboard: bindKeyboard
  }
}(jQuery))

function openLoader(request, response)
{
    request = typeof request !== 'undefined' ? request : false;
    response = typeof response !== 'undefined' ? response : false;

    var wrapper = (isset(request.wrapper) ? request.wrapper : 'body');
    var type = (isset(request.type) ? request.type : 'horizontal');

    if ($(wrapper + ' > .loader').length == 0)
    {
        if (wrapper == 'body') $(wrapper).addClass('overflow-hide');
        if (type == 'circular')
        {
            $(wrapper).prepend('<div class="loader"><div class="overlay"></div><div class="circular"><div class="cir1"></div><div class="cir2"></div><div class="cir3"></div><div class="cir4"></div><div class="cir5"></div><div class="cir6"></div><div class="cir7"></div><div class="cir8"></div><div class="cir9"></div><div class="cir10"></div><div class="cir11"></div><div class="cir12"></div></div></div>');
        }
        else
        {
            $(wrapper).prepend('<div class="loader"><div class="overlay"></div><div class="horizontal"><div class="hor1"></div><div class="hor2"></div><div class="hor3"></div><div class="hor4"></div><div class="hor5"></div></div></div>');
        }
    }

    if (response != false) response();
}

function closeLoader(request, response)
{
    request = typeof request !== 'undefined' ? request : false;
    response = typeof response !== 'undefined' ? response : false;

    var wrapper = (isset(request.wrapper) ? request.wrapper : 'body');
    $(wrapper + ' > .loader').fadeOut(function(){
        if (wrapper == 'body') $(wrapper).removeClass('overflow-hide');
        $(this).remove();
        if (response != false) response();
    });
}

function openNotification(request, response)
{
    request = typeof request !== 'undefined' ? request : false;
    response = typeof response !== 'undefined' ? response : false;

    if (request.message) {
        var wrapper = (isset(request.wrapper) ? request.wrapper : 'body'),
            style = (isset(request.style) ? request.style : ''),
            type = (isset(request.type) ? request.type : 'default'),
            title = (isset(request.title) ? request.title : ''),
            message = (isset(request.message) ? request.message : ''),
            notification = '';

        if ($(wrapper + ' > .notification-wrapper').length != 0) {
            closeNotification(request);
        }

        notification += '<div class="notification-wrapper mbottom-10'+((type == 'popup') ? ' pop' : '')+'">';
        if (type == 'popup') notification += '<div class="overlay"></div>';
        notification += '<div class="notification '+style+'" style="display: none;"><a class="ajax no-loader close" onclick="closeNotification({wrapper:\''+wrapper+'\'});"><i class="icon4-cross"></i></a>';
        notification += '<h5>'+((title != '') ? title : ((style != '') ? style : '&bull;&bull;&bull;'))+'</h5>';
        notification += '<p>'+message+'</p></div>';
        notification += '</div>';

        $(wrapper).addClass('pos-relative');
        if (wrapper == 'body') $(wrapper).addClass('overflow-hide');
        $(wrapper).prepend(notification);
        $(wrapper + ' > .notification-wrapper .notification').slideDown('fast');

        if (response != false) response();
    }
}

function closeNotification(request, response)
{
    request = typeof request !== 'undefined' ? request : false;
    response = typeof response !== 'undefined' ? response : false;

    var wrapper = (isset(request.wrapper) ? request.wrapper : 'body');

    $(wrapper + ' > .notification-wrapper .notification').slideUp('fast', function(){
        $(wrapper + ' > .notification-wrapper').remove();
        $(wrapper).removeClass('pos-relative');
        if (wrapper == 'body') $(wrapper).removeClass('overflow-hide');

        if (response != false) response();
    });
}

function openModal(request, response)
{
    request = (typeof request !== 'undefined' && request != null) ? request : false;
    response = typeof response !== 'undefined' ? response : false;

    if (isset(request.wrapper) && ($(request.wrapper).length != 0))
    {
        $('body').addClass('overflow-hide');
        $(request.wrapper).fadeIn('fast', function(){
            if (response != false) response();

            if ($('.scrollbar').length)
            {
                $('.scrollbar').getNiceScroll().resize();
            }

            if ($('.scrollbar-vertical').length)
            {
                $('.scrollbar-vertical').getNiceScroll().resize();
            }
        });
    }
}

function closeModal(request, response)
{
    request = (typeof request !== 'undefined' && request != null) ? request : false;
    response = typeof response !== 'undefined' ? response : false;
    
    if (isset(request.wrapper) && ($(request.wrapper).length != 0))
    {
        $('body').removeClass('overflow-hide');
        $(request.wrapper).fadeOut('fast', function(){
            if (response != false) response();
        });
    }
}

function isset(data) {
    if (typeof data != 'undefined') {
        return true;
    } else {
        return false;
    }
}
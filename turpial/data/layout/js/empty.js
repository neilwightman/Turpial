var dock_elements = 4;

$(document).ready(function() {
    recalculate_column_size();
    $(window).resize(function() {
        recalculate_column_size();
    });
});

function recalculate_column_size(nw, nh) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (nw != undefined)
        width = nw;
    if (nh != undefined)
        height = nh;
    
    var content_height = height - 23;
    var dock_width = 22 * dock_elements;
    var notice_container_width = width - (22 * dock_elements) - 10;
    var notice_width = notice_container_width - 20;
    var column_width = width - 1;
    var column_height = content_height;
    var wrapper_height = column_height;
    var list_width = column_width - 11;
    var list_height = column_height - 13;
    var empty_logo_top = list_height / 5;
    
    $('#content').css('height', content_height + 'px');
    $('.column').css('width', column_width + 'px');
    $('.column').css('height', column_height + 'px');
    $('#dock').css('width', dock_width + 'px');
    $('#notice-container').css('width', notice_container_width + 'px');
    $('#notice').css('width', notice_width + 'px');
    $('.empty-wrapper').css('height', wrapper_height + 'px');
    $('.empty-wrapper').css('width', column_width + 'px');
    $('.empty-list').css('width', list_width + 'px');
    $('.empty-list').css('height', list_height + 'px');
    $('.empty-logo').css('margin-top', empty_logo_top + 'px');
}

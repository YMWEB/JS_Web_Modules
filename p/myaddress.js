require(["user", "module-region"], function (user, region) {
    user._init();
    /*@ region
    #province #city code 
    */
    function init() {
        var pcode = $('#province').val();
        var pname = $("#province").attr('data-name');
        var ccode = $("#province").val();
        var cname = $("#province").attr('data-name');
        $('#region-select').html(pname + '/' + cname);
    }
    function bind() {

    }
})
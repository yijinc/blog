/**
 * Created by yjc on 2017-10-31.
 */

$(function () {

    var loading = false;

    $('#username_reg').on('keyup', function () {
        var username = $(this).val();
        if(!username) {
            $(this).parent().addClass('has-error');
            $(this).prev().addClass('text-danger');
        } else {
            $(this).parent().removeClass('has-error');
            $(this).prev().removeClass('text-danger');
        }

        var password = $('#password_reg').val();

        if(username&&password){
            $('#btn-regist').attr('disabled', false);
        } else {
            $('#btn-regist').attr('disabled', true);
        }
    });

    $('#password_reg').on('keyup', function () {
        var password = $(this).val();
        if(!password) {
            $(this).parent().addClass('has-error');
            $(this).prev().addClass('text-danger');
        } else {
            $(this).parent().removeClass('has-error');
            $(this).prev().removeClass('text-danger');
        }

        var username = $('#username_reg').val();

        if(username&&password){
            $('#btn-regist').attr('disabled', false);
        } else {
            $('#btn-regist').attr('disabled', true);
        }
    });

    $('#btn-regist').on('click', function () {

        if(loading)
            return ;
        loading = true;

        var username = $('#username_reg').val();
        var password = $('#password_reg').val();
        if(username&&password) {
            $.ajax({
                url: '/api/regist',
                type: 'post',
                data: {
                    username: username,
                    password: password
                },
                dataType: 'json',
                success: function (res) {

                    loading = false;

                    console.log(res);

                    if(res.success) {

                        $('#registModal').modal('hide');

                        setTimeout(function () {
                            $('#loginModal').modal('show');
                        }, 300);


                    } else {
                        $('#regError').html(res.error);
                    }
                }
            })
        } else
            return false;
    })
});


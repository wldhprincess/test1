$(function(){
    const normalMemberTab = $('#normalMemberTab');
    const businessMemberTab = $('#businessMemberTab');
    const memberLog = $('.memberLog');
    const buisnessLog = $('.buisnessLog');

    normalMemberTab.addClass('clickBtn');

    normalMemberTab.click(function() {
        normalMemberTab.toggleClass('clickBtn');
        businessMemberTab.removeClass('clickBtn');
        memberLog.show();
        buisnessLog.hide();
        if($(this).click){
            $(this).addClass('clickBtn');
        }
    });

    businessMemberTab.click(function() {
        businessMemberTab.toggleClass('clickBtn');
        normalMemberTab.removeClass('clickBtn');
        memberLog.hide();
        buisnessLog.show();
        if($(this).click){
            $(this).addClass('clickBtn');
        }
    });



    var countdown; // 타이머 변수

    function formatTime(seconds) {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        var remainingSeconds = seconds % 60;

        return (
            ('0' + hours).slice(-2) + ':' +
            ('0' + minutes).slice(-2) + ':' +
            ('0' + remainingSeconds).slice(-2)
        );
    }

    $('#startTimer').click(function() {
        // 버튼 클릭 시 타이머 시작
        var remainingTime = 180; // 남은 시간 (초)
        $('#timer').text(formatTime(remainingTime)); // 초기 시간 설정
        $(this).prop('disabled', true); // 버튼 비활성화

        countdown = setInterval(function() {
            remainingTime--;
            $('#timer').text(formatTime(remainingTime)); // 남은 시간 업데이트

            if (remainingTime <= 0) {
                clearInterval(countdown); // 타이머 정지
                $('#timer').text("시간 초과"); // 시간 초과 메시지 표시
                $('#startTimer').prop('disabled', false); // 버튼 활성화
            }
        }, 1000); // 1초마다 실행
    });


    $('.kakao, .submit').click(function(){
        location.href = 'loginMain.html'
    })

    $('.naver').click(function(){
        location.href = 'loginMainNaver.html'
    })
    $('.easySignUp').click(function(){
        location.href = 'join.html';
    })
})
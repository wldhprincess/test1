var duplicateCheckId = false;

$(function(){
    const normalMemberTab = $('#normalMemberTab');
    const businessMemberTab = $('#businessMemberTab');
    const memberLog = $('.snsLoginHide');
    const buisnessLog = $('#buisnessLogShow');

    const buisnessLogNext = $('.buisnessLog.buisnessLogNext');
    const nextBtn = $('.nextBtn');
    const arrowBtn = $('.arrowBtn');
    
    const completed = $('.completed');


    buisnessLogNext.hide();
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
        buisnessLogNext.hide();
        if($(this).click){
            $(this).addClass('clickBtn');
        }
    });

    arrowBtn.click(function(){
        buisnessLog.show();
        buisnessLogNext.hide();
    })

    nextBtn.click(function(){

        //검증시작
        if($('#loginId').val() == ''){
            alert('아이디를 입력해주세요');
            return false;
        } 
        if($('#password').val() == ''){
            alert('비밀번호를 입력해주세요');
            return false;
        } 
        if($('#password1').val() == ''){
            alert('비밀번호를 입력해주세요');
            return false;
        } 
        if($('#phone').val() == ''){
            alert('전화번호를 입력해주세요');
            return false;
        } 
        if($('#CertificationNumber').val() == ''){
            alert('인증번호를 입력해주세요');
            return false;
        } 



        
        /* if(duplicateCheckId == false){
            alert("중복된 아이디 확인바랍니다.");
        } */

        


        //검증 완료 
        buisnessLog.hide();
        buisnessLogNext.show();
    })

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


    completed.click(function(){
        
        if($('#managerName').val() == ''){
            alert('담당자명을 입력해주세요');
            return false;
        } 
        if($('#managerNumber').val() == ''){
            alert('담당자 연락처를 입력해주세요');
            return false;
        } 
        if($('#companyName').val() == ''){
            alert('회사명을 입력해주세요');
            return false;
        } 
        if($('#companyAddress').val() == ''){
            alert('회사주소를 입력해주세요');
            return false;
        } 
        if($('#detailedAddress').val() == ''){
            alert('상세주소를 입력해주세요');
            return false;
        } 
        if($('#BusinessRegistration').val() == ''){
            alert('사업자등록증을 등록해주세요');
            return false;
        } 

        buisnessLogNext.hide();
        $('.membertab').hide();
        $('.join').hide();
        $('.memberLog').hide();
        $('.completeWrap').show();
    })





})

// function checkId(){
    // *********************** json을 서버에게 보낼때 START *********************** //
    //보낼 데이터
    /*
    var loginData = {
        "loginId" : $('#loginId').val()
        // , "age" : 99
        // , "address" : "서울시"
    }

    $.ajax ( {
        type : "POST", // GET, POST 
        url : "서버주소",
        dataType : 'json', // 서버한테 어떤 데이터종류로 받을지
        contentType : 'application/json', //어떤 데이터종류로 보낼지, json과 form
        async: false,
        data : JSON.stringify(loginData), //보낼 데이터
        beforeSend : function() {
            alert("ajax 호출시 실행");
        },
        success : function(res) {
            console.log("성공적으로 통신완료");
            if(res.checkId = true){ //중복이 있을때는 checkId가 true
                alert("중복된 아이디입니다.");
            }else{
                alert("사용가능한 아이디입니다.");
                duplicateCheckId = true;
            }  
        },
        error : function(xhr) {
            alert("통신오류입니다.");
        },
        complete : function() {
            // alert("ajax 호출 완료시 실행");
        }
    });
    */
    // *********************** json을 서버에게 보낼때 END *********************** //


    // *********************** form을 서버에게 보낼때 START *********************** //

//     var form = $("#loginForm")[0];    // form안에 있는 모든 input값들을 서버에 전송    
    
//     var formData = new FormData(form);
//     for (let key of formData.keys()) {
//         console.log(key, ":", formData.get(key));
//     }

//     $.ajax ( {
//         type : "POST", // GET, POST 
//         url : "서버주소",
//         dataType : 'json', // 서버한테 어떤 데이터종류로 받을지
//         contentType : false,
//         async: false,
//         cache: false,
//         enctype: 'multipart/form-data',
//         data : formData, //보낼 데이터
//         processData: false,
//         beforeSend : function() {
//             console.log('formData확인', this.data.get('loginId')); //출력이안된다.
//             alert("ajax 호출시 실행");
//         },
//         success : function(res) {
//             console.log("성공적으로 통신완료");
//             if(res.checkId = true){ //중복이 있을때는 checkId가 true
//                 alert("중복된 아이디입니다.");
//             }else{
//                 alert("사용가능한 아이디입니다.");
//                 duplicateCheckId = true;
//             }  
//         },
//         error : function(xhr) {
//             // alert("통신오류입니다.");
//         },
//         complete : function() {
//             // alert("ajax 호출 완료시 실행");
//         }
//     });
// }   
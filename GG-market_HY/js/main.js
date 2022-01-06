const loading = document.querySelector('#loading');
const login = document.querySelector('#login');
const loginEmail = document.querySelector('#loginEmail');
const useEmail = document.querySelector('.useEmail');
const signUp = document.querySelector('.signUp');
const email = document.querySelector('#email');
const pw = document.querySelector('#pw');
const logininput = document.querySelector('.logininput');
const nextBtn = document.querySelector('.nextBtn');
const goJoin = document.querySelector('.goJoin');
const joinMembership = document.querySelector('#joinMembership');
const joinInput = document.querySelector('#joinInput');
const joinemail = document.querySelector('#joinemail');
const joinpw = document.querySelector('#joinpw');

// Splash Screen에서 로그인 창으로 이동
login.classList.add('hide');

function movetoLoginpage () {
    setTimeout(() => {
        loading.classList.add('hide');
        login.classList.remove('hide');
    }, 1500);
};

window.addEventListener('load', () => {
    movetoLoginpage();
});

// 이메일로 로그인 누르면 다음 화면으로 이동
loginEmail.classList.add('hide');

function loginwithEmail () {
    login.classList.add('hide');
    loginEmail.classList.remove('hide');
};

useEmail.addEventListener('click', () => {
    loginwithEmail();
});

// Login-email 아이디와 비번을 입력하면 버튼 색 바뀜

function nextBtnChange () {
    nextBtn.style.backgroundColor = '#EA7F42';
};

logininput.oninput = function() {
    if (email.value == null || pw.value == null) {
        return false;    
    } else {
        nextBtnChange ();
        return true;
    }
  };

// 잘못된 값을 입력하면 border-bottom 색 변경 됌

// 회원가입 페이지로 가기

joinMembership.classList.add('hide');

function goJounPage() {
    joinMembership.classList.remove('hide');
};

signUp.addEventListener('click', () => {
    login.classList.add('hide');
    goJounPage();
});

goJoin.addEventListener('click', () => {
    loginEmail.classList.add('hide');
    goJounPage();
});

// 다음 버튼 누르면 프로필로 이동

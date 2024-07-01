// .load()必須用live.server
// html要先加入div
// 用js把header跟footer導入指定位置
// 把指定的網頁載入到指定的div裡
// 好處是之後要改header跟footer裡面的東西，就不用一頁一頁地改

// $(function(){
//     $('.header-frame').load('header.html');
//     $('.footer-frame').load('footer.html');

// })

// Header的SearchBar點擊
document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.getElementById('search-icon');
    var searchBarContainer = document.getElementById('search-bar-container');
    var closeBtn = document.getElementById('close-btn');

    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        searchBarContainer.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        searchBarContainer.style.display = 'none';
    });

    document.addEventListener('click', function() {
        searchBarContainer.style.display = 'none';
    });

    searchBarContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent clicks inside the search bar from closing it
    });

    // 新增防止 URL 中出現不必要的 # 符號的部分
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#') {
            history.replaceState('', document.title, window.location.pathname);
        }
    }, false);

    // 阻止空錨點的預設行為
    document.querySelectorAll('a[href="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});

// Header-手機版的漢堡點擊，下拉選單會出來
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.bi-list-sm');
    var mainNavSm = document.querySelector('.main-nav-sm');
    var items = document.querySelectorAll('.sm-item');

    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        if (mainNavSm.style.display === 'none' || mainNavSm.style.display === '') {
            mainNavSm.style.display = 'flex'; // 使用 flex 以確保布局正確
        } else {
            mainNavSm.style.display = 'none';
        }
    });
});

// 
$('.main-nav-sm-item').each(function () {
    $(this).on("click", function () {
        $(this).toggleClass('active')
    
    });
})

// toTopbtn
$(function(){
    $('.toTopbtn').click(function(){
        $('html, body').animate({scrollTop: 0},300);
        return false;
    })
})

// footer
document.querySelectorAll('.footer-list').forEach(list => {
    list.addEventListener('click', () => {
        const listItem = list.querySelector('.list-item');
        listItem.style.display = listItem.style.display === 'none' || !listItem.style.display ? 'block' : 'none';
    });
})
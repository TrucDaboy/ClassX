const component = {};
component.registerScreen = `
<div class="register-container">
        

    
<script>
    console.log("working!!!")
</script>
<div class="aside-left">            

</div>
<div class="aside-right">
    
    <form id="register-form">
        <div class="header">
            <h3>Đăng ký</h3>
        </div>
        <div class="input-name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firstName" placeholder="Tên">
                <div class="error" id="first-name-error"></div>
            </div>

            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="Họ">
                <div class="error" id="last-name-error"></div>
            </div>
        </div>

        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Mật khẩu">
            <div class="error" id="password-error"></div>
        </div>
        

        <div class="input-wrapper">
            <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu">
            <div class="error" id="confirm-password-error"></div>
        </div>

        <!-- xong het phan input -->

        <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-login">Đã có tài khoản? Đăng nhập</span>
        </div>

        <button class="btn" type="submit" style="margin: 10px;">
            <span></span>
             Đăng ký
        </button>
        <script>
            $(document).ready(function(e){
                $('.btn').on("mouseenter",function(e){
                    x = e.pageX - $(this).offset().left;
                    y = e.pageY - $(this).offset().top;
                    $(this).find("span").css({top:y,left:x})
                })
                $('.btn').on("mouseout",function(e){
                    x = e.pageX - $(this).offset().left;
                    y = e.pageY - $(this).offset().top;
                    $(this).find("span").css({top:y,left:x})
                })
            })
            </script>
    
    </form>


</div>
</div>
`

component.homepageScreen = `

<div class="border-text" id="text-main-classx">
CLASS X
</div>
<div class="border-text" id="text-main-class-name">
JSA-05
</div>
<div id="star-ani-content">
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
</div>
<div class="home-container">
<div class="navbar">
    <div class="header" id="header">
        <div>
        </div>
        <ul class="nav">
            <li id="Icon">

                <a href="/tempHome.html" style="width: 100%;height: 100%;" id="logo">ㅤㅤㅤㅤ</a>
            </li>
            <li><a href="#">Trang chủ</a>
                <div class="line" id="line-TrangChu"></div>
            </li>
            <li><a href="#">Tin tức</a>
                <div class="line" id="line-TinTuc"></div>
            </li>
            <li><a href="#">Thông tin</a>
                <div class="line" id="line-ThongTin"></div>
            </li>
            <li><a href="#">Điểm số</a>
                <div class="line" id="line-DiemSo"></div>
            </li>
        </ul>
        <ul class="button-nav">
            <li id="signout-btn"><a href="#" class="button">Đăng xuất</a></li>
        </ul>
        <div class="user-info">

        </div>
    </div>
</div>
<section class="section-header">
    <div class="area">
        <div class="text-header" id="text-header">
            <div class="middle-align-header">
                <img src="../img/logo_max_light.png" alt="Class X" id="logo-header">
                <p>JSA-05</p>
            </div>
        </div>
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</section>

<section class="section-first">

    <div class="border-text" id="text-news">
        NEWS
    </div>
    <div class="content tintuc-section-content">
        <div class="aside-left-content">
            <div class="header-content">Tin tức</div>
            <div class="tin-tuc-container">
                <article>
                    <div class="img" id="news-1"></div>
                    <div>
                        <a href="#">Lorem ipsum dolor sit amet co nsec tetur adi pisi cing elit. Poss imus
                            magnam ...
                        </a>
                    </div>
                </article>
                <article>
                    <div class="img" id="news-2"></div>
                    <div>
                        <a href="#">
                            Lorem ipsum dolor sit amet consec tetur adipi sicing elit. ...
                        </a>
                    </div>
                </article>
            </div>
            <div class="more-news-link"><a href="#">xem thêm...</a> </div>
        </div>
        <div class="aside-right-content">
            <div class="header-content">HS tiêu biểu</div>
            <div class="top-5">
                <div class="top-student-container" id="top-1">
                    <div>Nguyen Thi A</div>
                    <div class="grade">9</div>
                </div>
                <div class="top-student-container" id="top-2">
                    <div>Bui Tien Lam</div>
                    <div class="grade">9</div>
                </div>
                <div class="top-student-container" id="top-3">
                    <div>Que Van Dung</div>
                    <div class="grade">9</div>
                </div>
                <div class="top-student-container" id="top-4">
                    <div>Tran Cong Vinh</div>
                    <div class="grade">9</div>
                </div>
                <div class="top-student-container" id="top-5">
                    <div>Nguyen Ngoc Hai</div>
                    <div class="grade">9</div>
                </div>
            </div>

        </div>

    </div>
</section>
<section class="section-next">
    <div class="content">
        <div class="header-content">Tạo bài viết</div>
        <div class="create-tieude">
            <input placeholder="Tiêu đề bài viết...">
        </div>
        <div class="create-noidung">
            <textarea placeholder="Nội dung bài viết..."></textarea>
        </div>
        <div class="create-button">
            <div> <button class="btn" type="submit">
                    <span></span>
                    Đăng tin
                </button></div>

            <script>
                $(document).ready(function (e) {
                    $('.btn').on("mouseenter", function (e) {
                        x = e.pageX - $(this).offset().left;
                        y = e.pageY - $(this).offset().top;
                        $(this).find("span").css({ top: y, left: x })
                    })
                    $('.btn').on("mouseout", function (e) {
                        x = e.pageX - $(this).offset().left;
                        y = e.pageY - $(this).offset().top;
                        $(this).find("span").css({ top: y, left: x })
                    })
                })
            </script>
        </div>
    </div>

</section>

</div>
<script>

document.getElementById("line-TrangChu").style.visibility = "visible"
document.getElementById("line-TinTuc").style.visibility = "hidden"
document.getElementById("line-DiemSo").style.visibility = "hidden"
document.getElementById("line-ThongTin").style.visibility = "hidden"
window.onload = () => {
    document.getElementById("header").style.background = "rgba(255, 255, 255, 0)"

}
window.onscroll = () => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop < 10) {
        console.log("true")
        document.getElementById("header").style.background = "rgba(255, 255, 255, 0)"
    } else {
        console.log("false")

        document.getElementById("header").style.background = "rgba(59, 59, 59)"

    }

}

</script>`


component.loginScreen = `
<div class="login-container">
<div class="aside-left"></div>
<div class="aside-right">
    
    <form id="login-form">
        <div class="header">
            <h3>Đăng nhập</h3>
        </div>
        

        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Mật khẩu">
            <div class="error" id="password-error"></div>
        </div>

        

        <!-- xong het phan input -->

        <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-register">Chưa có tài khoản? Đăng ký ngay</span>
        </div>

        <button class="btn" type="submit">
            <span></span>
            Login
        </button>
        <script>
            $(document).ready(function(e){
                $('.btn').on("mouseenter",function(e){
                    x = e.pageX - $(this).offset().left;
                    y = e.pageY - $(this).offset().top;
                    $(this).find("span").css({top:y,left:x})
                })
                $('.btn').on("mouseout",function(e){
                    x = e.pageX - $(this).offset().left;
                    y = e.pageY - $(this).offset().top;
                    $(this).find("span").css({top:y,left:x})
                })
            })
            </script>
    </form>


</div>
</div>`
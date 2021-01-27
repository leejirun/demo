# Gaion Web_project
#### 개발 기간 : 2020.01.12 ~ 진행중

## 혼자 공부하며 개발한 것을 기록해두었습니다.  
>간단한 CRUD 웹 서비스를 만들어 보는 과정으로 하고 있습니다.

<br>
<br>

####<로그인 화면>
![page_signin](./uploads/page_signin.PNG)
<br>
<br>
**목표**
>- user  : 회원가입과 로그인, 프로필 조회/수정/탈퇴 
>- admin : 회원 관리 페이지
>- board : 게시판 작성/조회/수정/삭제

## Language & Web Framework
- Language : java, javascript, css, html 사용
- Web Framework : Spring Boot, React

## OS 환경
- Windows 10

## DB
- Maria DB


## 기능

모든 URL은 REstfil API식으로 구성되었습니다.
> User

* 회원가입 시, Bcrypt를 활용한 password 암호화 
* 로그인 시, 해당 유저의 jwt 토큰 생성 및 토큰 검증을 위한 Interceptor 구현


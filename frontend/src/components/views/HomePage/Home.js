import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from 'axios';

const switchRoutes = (
    <Switch>
        <Route path="/home/dashboard" component={DashBoard}/>
        <Route path="/home/profile" component={Profile}/>
        <Route path="/home/list" component={list}/>
        <Route path="/home/admin" component={AdminList}/>
        <Redirect from="/home" to="/home/dashboard" />
    </Switch>
);

function Home() {

    const [loginUser, setLoginUser] = React.useState({});

    function NavBarName() {
        switch (window.location.pathname.split('/')[2]) {
            case "profile":
                setThemeName("유저 프로필");
                break;
            case "list":
                setThemeName("리스트");
                break;
            case "admin":
                setThemeName("Admin 회원 관리");
                break;
        }
    }
    useEffect(()=> {
        NavBarName();
    });

    useEffect(()=> {
        NavBarName();

        axios.get('/users/login')
            .then(function(response){
                if(response.data === "") {
                    const temp = {user_idx : 0}
                    setLoginUser(temp);
                } else {
                    setLoginUser(response.data);
                }
            })
            .catch(function(error){
                console.log(error);
            })
    }, []);

    return (
        <div className={classes.root}>
            <NavBar themeName = {themeName} loginUser = {loginUser.user_idx}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container  style={{minHeight:"100vh", backgroundColor:"#fef7e1"}} maxWidth="xl" className={classes.container}>
                    {
                        (function() {
                            if(loginUser.user_idx === -1 && loginUser.user_id === "root") return;
                            else if (loginUser.user_idx !== 0) return ;
                            else {
                                alert("로그인 후 이용해주세요");
                                return (window.location.href="/signin");
                            }
                        })()
                    }
                    {switchRoutes}
                </Container>
                <Footer/>
            </main>
        </div>
    );
}
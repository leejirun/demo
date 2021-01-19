import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import Axios from 'axios';

function LoginPage(props) {

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.post('/user/signin', {
            "user_id" : {Id}.id,
            "user_pw" : {Password}.password,
        }).then( response => {
            if(response.data.user_id != null){
                alert("로그인 성공");
                window.location.href = "/";
            }else {
                alert("로그인 실패! 아이디나 비밀번호 또는 승인상태를 확인해주세요.");
            }
        }).catch( error => {
            alert("로그인 실패! 아이디나 비밀번호 또는 승인상태를 확인해주세요.");
        })
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                backgroundColor: "darkkhaki",

            }}>
            <form
                onSubmit={onSubmitHandler}
                style={{ display: "flex", flexDirection: "column" }}>
                <label>Id</label>
                <input type="id" value={Id} onChange={onIdHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">Login</button>
                <Link container>
                    <Link item xs/>
                    <div item>
                        <Link to="/register" >
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                </Link>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);
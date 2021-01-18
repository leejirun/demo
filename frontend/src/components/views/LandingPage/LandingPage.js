import React from "react";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
    const onClickHandler = () => {
        alert('Welcome to home');
    };

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
                color: "white",
            }}>

            <h2>시작 페이지</h2>
            <br />
            <span></span>
            <button onClick={onClickHandler}>로그인</button>
        </div>
    );
}

export default withRouter(LandingPage);
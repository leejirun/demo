import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


function LandingPage(props) {
    const onClickHandler = () => {
        alert('로그인 창으로 이동합니다.');
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
                fontSize:100,
            }}>

            <h2>Hello</h2>
            <h4>♥</h4>
            <br />
            <br />
            <Link to="/login">
                <button onClick={onClickHandler}>로그인</button>
            </Link>
        </div>
    );
}

export default withRouter(LandingPage);
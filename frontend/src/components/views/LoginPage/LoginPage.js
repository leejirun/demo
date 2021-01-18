import React, { useState } from "react";
import { withRouter } from "react-router-dom";
function LoginPage(props) {

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
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
                <input type="password" value={Password} onChange={onPasswordHanlder} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);
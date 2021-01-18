import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/userAction";

function RegisterPage(props) {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPasword, setConfirmPasword] = useState("");
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const dispatch = useDispatch();

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };

    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onConfirmPasswordHandler = (e) => {
        setConfirmPasword(e.currentTarget.value);
    };

    const onNameHanlder = (e) => {
        setName(e.currentTarget.value);
    };

    const onAddressHandler = (e) => {
        setAddress(e.currentTarget.value);
    };

    const onPhoneHandler = (e) => {
        setPhone(e.currentTarget.value);
    };

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (Password === ConfirmPasword) {
            let body = {
                id : Id,
                password: Password,
                name: Name,
                Address: Address,
                phone: Phone,
                email: Email,
            };
            dispatch(registerUser(body)).then((res) => {
                alert("가입이 정상적으로 완료되었습니다");
                props.history.push("/login");
            });
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
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

                <label>ConfirmPasword</label>
                <input
                    type="password"
                    value={ConfirmPasword}
                    onChange={onConfirmPasswordHandler}
                />

                <label>Name</label>
                <input type="name" value={Name} onChange={onNameHanlder} />

                <label>Address</label>
                <input type="address" value={Address} onChange={onAddressHandler} />

                <label>Phone</label>
                <input type="phone" value={Phone} onChange={onPhoneHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />



                <br />
                <button type="submit">회원 가입</button>
            </form>
        </div>
    );
}

export default withRouter(RegisterPage);
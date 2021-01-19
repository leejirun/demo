import React, { useState } from "react";
import {Link, withRouter} from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/userAction";

import axios from 'axios';


function RegisterPage(props) {

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Gender, setGender] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const dispatch = useDispatch();

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };

    const onAgeHandler = (e) => {
        setAge(e.currentTarget.value);
    };

    const onGenderHandler = (e) => {
        setGender(e.currentTarget.value);
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
        axios.post('/user/signup', {
            "user_id" : {Id}.id,
            "user_pw" : {Password}.password,
            "user_name" : {Name}.name,
            "user_age": {Age}.age,
            "user_gender":{Gender}.Gender,
            "user_address" : {Address}.address,
            "user_phone": {Phone}.phone,
            "user_email": {Email}.email
        }).then( response => {
            if(response.data > 8){
                alert("회원가입 성공");
                window.location.href = "/register;"
            }
        })
        if (Password === ConfirmPassword) {
            let body = {
                id : Id,
                password: Password,
                name: Name,
                Age : Age,
                Gender : Gender,
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
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>ConfirmPassword</label>
                <input
                    type="password"
                    value={ConfirmPassword}
                    onChange={onConfirmPasswordHandler}
                />

                <label>Name</label>
                <input type="name" value={Name} onChange={onNameHandler} />

                <label>Age</label>
                <input type="age" value={Age} onChange={onAgeHandler} />

                <label>Gender</label>
                <input type="gender" value={Gender} onChange={onGenderHandler} />

                <label>Address</label>
                <input type="address" value={Address} onChange={onAddressHandler} />

                <label>Phone</label>
                <input type="phone" value={Phone} onChange={onPhoneHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <br />
                <button type="submit">회원 가입</button>
                <br />
                <Link container>
                    <Link item xs/>
                    <div item>
                        <Link to="/login" >
                            Already have an account? Sign in
                        </Link>
                    </div>
                </Link>

            </form>
        </div>
    );
}

export default withRouter(RegisterPage);
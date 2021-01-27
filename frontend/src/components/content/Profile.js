import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { TextField, Button, Select, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText
    , MenuItem, InputLabel, Box} from '@material-ui/core';
import axios from 'axios';
import Axios from "axios";
import PropTypes from "prop-types";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};
const useStyles = makeStyles(styles);
export default function UserProfile({location, history}) {
    const classes = useStyles();

    console.log(axios.defaults.headers.common['Authorization']);

    const [gender, setGender] = React.useState('');

    const [id,setId] = React.useState('');

    const [pw,setPw] = React.useState('');

    const [name,setName] = React.useState('');

    const [phone,setPhone] = React.useState('');

    const [email,setEmail] = React.useState('');

    const [address, setAddress] = React.useState('');

    const [age, setAge] = React.useState('');

    const [grade,setGrade] = React.useState('');

    const handleChange = e => { setGender(e.target.value) };
    const handleChangeId = e => { setId(e.target.value) };
    const handleChangePw = e => { setPw(e.target.value) };
    const handleChangeName = e => { setName(e.target.value) };
    const handleChangePhone = e => { setPhone(e.target.value) };
    const handleChangeEmail = e => { setEmail(e.target.value) };
    const handleChangeAddress = e => { setAddress(e.target.value); };
    const handleChangeAge = e => { setAge(e.target.value); };
    const handleChangeGrade = e => { setGrade(e.target.value) };

    useEffect(() => {
        Axios.get('/user/profile')
        .then(function( response){
            console.log(response);
            console.log(axios.defaults.headers.common['Authorization']);
            if(response.data.message === "프로필 정보 조회 성공") {
                setId(response.data.user.user_id);
                setPw(response.data.user.user_pw);
                setName(response.data.user.user_name);
                setPhone(response.data.user.user_phone);
                setEmail(response.data.user.user_email);
                setAddress(response.data.user.user_address);
                setAge(response.data.user.user_age);
                setGrade(response.data.user.user_grade);
                setGender(response.data.user.user_gender);
            }
        })
        .catch(function(error){
            console.log(error);
        })
    },[]);

    const handleOnClick = e => {
        e.preventDefault();
        axios.put('/user/update', {
            "user_id" : {id}.id,
            "user_pw" : {pw}.pw,
            "user_name" : {name}.name,
            "user_email" : {email}.email,
            "user_phone" : {phone}.phone,
            "user_address":{address}.address,
            "user_age":{age}.age,
            "user_grade" : {grade}.grade,
            "user_gender" : {gender}.gender
        }).then( respose => {
            console.log(respose);
            console.log(axios.defaults.headers.common['Authorization']);
            if(respose.data > 0){
                alert("프로필 수정 성공");
                window.location.reload();
                }
            }).catch( error => {
                console.log(error);
                alert("프로필 수정 실패");
            })
    }

     const handleOnClick2 = e => {
         e.preventDefault();
         if(window.confirm("정말 탈퇴하시겠습니까?")) {
             axios.delete('/user/delete')
                 .then( respose => {
                     console.log(respose);
                     console.log(axios.defaults.headers.common['Authorization']);
                     if(respose.data > 0){
                        alert("탈퇴 성공");
                         window.location.reload();
                     }
                     history.push('/signup');
                 }).catch( error => {
                console.log(error);
                 alert("탈퇴 실패");
             })
         }
         else {
             console.log("false");
       }

     }

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h2 className={classes.cardTitleWhite}>{id}의 프로필</h2>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={6} sm={6} md={3}>
                                    <TextField
                                        value={id}
                                        onChange={handleChangeId}
                                        margin="normal"
                                        fullWidth
                                        id="id"
                                        label="아이디"
                                        name="id"
                                        autoComplete="id"
                                        disabled
                                    />
                                </GridItem>
                                <GridItem xs={6} sm={6} md={3}>
                                    <TextField
                                        type="password"
                                        value={pw}
                                        onChange={handleChangePw}
                                        margin="normal"
                                        fullWidth
                                        id="pw"
                                        label="비밀번호"
                                        name="pw"
                                        autoComplete="pw"
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={4} sm={4} md={2}>
                                    <TextField
                                        value={name}
                                        onChange={handleChangeName}
                                        margin="normal"
                                        fullWidth
                                        id="name"
                                        label="이름"
                                        name="name"
                                        autoComplete="name"
                                        disabled
                                    />
                                </GridItem>
                                <GridItem xs={6} sm={6} md={3}>
                                    <TextField
                                        value={phone}
                                        onChange={handleChangePhone}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="핸드폰 번호"
                                        name="phone"
                                        autoComplete="phone"
                                    />
                                </GridItem>
                                <GridItem xs={6} sm={6} md={3}>
                                    <TextField
                                        value={address}
                                        onChange={handleChangeAddress}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="address"
                                        label="주소"
                                        name="address"
                                        autoComplete="address"
                                    />
                                </GridItem>
                                <GridItem xs={8} sm={8} md={4}>
                                    <TextField
                                        value={email}
                                        onChange={handleChangeEmail}
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        label="이메일 주소"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={6} sm={6} md={3}>
                                    <FormControl className={classes.formControl} style={{marginTop : "35px"}}>
                                        <InputLabel id="select-label">유형</InputLabel>
                                        <Select
                                            labelid="select-label"
                                            id="simple-select"
                                            value={grade}
                                            onChange={handleChangeGrade}
                                            disabled
                                        >
                                            <MenuItem value={0}>user</MenuItem>
                                            <MenuItem value={1}>admin</MenuItem>
                                        </Select>
                                        <FormHelperText>가입 유형을 선택해주세요</FormHelperText>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <FormControl component="fieldset" style={{marginTop : "35px"}}>
                                        <FormLabel component="legend" style={{display:"inline", marginBottom:"15px"}}>성별</FormLabel>
                                        <RadioGroup row aria-label="position" name="position" defaultValue="top" value={gender} onChange={handleChange}>
                                            <FormControlLabel
                                                value="M"
                                                control={<Radio color="primary" />}
                                                label="남자"
                                                labelPlacement="top"
                                                disabled
                                            />
                                            <FormControlLabel
                                                value="F"
                                                control={<Radio color="primary" />}
                                                label="여자"
                                                labelPlacement="top"
                                                disabled
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={6} sm={6} md={3}>
                                    <TextField
                                        value={age}
                                        onChange={handleChangeAge}
                                        margin="normal"
                                        fullWidth
                                        id="age"
                                        label="나이"
                                        name="age"
                                        autoComplete="age"
                                        disabled
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Box style={{width:"100%"}} display="flex" flexDirection="row" p={1} m={1}>
                                <Box p={1}>
                                     <Button style={{backgroundColor:"#9c27b0", color:"white"}} color="primary" onClick={handleOnClick}>프로필 수정</Button>
                                     <Button style={{backgroundColor:"#9c27b0", color:"white", marginLeft:"2rem"}} color="primary" onClick={handleOnClick2}>회원 탈퇴</Button>
                                </Box>
                            </Box>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
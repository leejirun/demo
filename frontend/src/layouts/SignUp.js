import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, TextField, Button, Select, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText
  , MenuItem, InputLabel, } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgImg from "assets/img/cover.jpg";

import axios from 'axios';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Gaion leejiyeon
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [gender, setGender] = React.useState('');
  const [id,setId] = React.useState('');
  const [pw,setPw] = React.useState('');
  const [name,setName] = React.useState('');
  const [phone,setPhone] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [age, setAge] = React.useState('');
  const [grade,setGrade] = React.useState('');

  const handleChange = e => { setGender(e.target.value); };
  const handleChangeId = e => { setId(e.target.value) };
  const handleChangePw = e => { setPw(e.target.value) };
  const handleChangeName = e => { setName(e.target.value) };
  const handleChangePhone = e => { setPhone(e.target.value) };
  const handleChangeEmail = e => { setEmail(e.target.value) };
  const handleChangeAddress = e => { setAddress(e.target.value); };
  const handleChangeAge = e => { setAge(e.target.value); };
  const handleChangeGrade = e => { setGrade(e.target.value) };

  const handleClick = e => {
    e.preventDefault();
    axios.post('/signup', {
      "user_id" : {id}.id,
      "user_pw" : {pw}.pw,
      "user_name" : {name}.name,
      "user_email" : {email}.email,
      "user_phone" : {phone}.phone,
      "user_address" :{address}.address,
      "user_age" : {age}.age,
      "user_grade" : {grade}.grade,
      "user_gender" : {gender}.gender
    }).then( respose => {
      if(respose.data.message == "회원가입 성공"){
          alert("회원가입 성공");
          window.location.href = "/signin";
      }
    }).catch( error => {
      console.log("회원가입 실패");
    })
  }

  return (
    <div className={classes.wrapper} style={{backgroundImage: `url(${bgImg})`, backgroundSize:"cover"}}>
    <Container component="main" maxWidth="sm" style={{}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
              <Grid container spacing={0}>
                  <Grid item xs={5}>
                      <TextField
                          value={id}
                          onChange={handleChangeId}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="id"
                          label="아이디"
                          name="id"
                          autoComplete="id"
                      />
                  </Grid>
                  <Grid item xs={5} style={{marginLeft:"3rem"}}>
                      <TextField
                          value={pw}
                          onChange={handleChangePw}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="pw"
                          label="비밀번호"
                          name="pw"
                          autoComplete="pw"
                      />
                  </Grid>
                  <Grid item xs={3}>
                      <TextField
                          value={name}
                          onChange={handleChangeName}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          label="이름"
                          name="name"
                          autoComplete="name"
                      />
                  </Grid>
                  <Grid item xs={6} style={{marginLeft:"3rem"}}>
                      <TextField
                          value={email}
                          onChange={handleChangeEmail}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="이메일 주소"
                          name="email"
                          autoComplete="email"
                      />
                  </Grid>
                  <Grid item xs={4} >
                      <TextField
                          value={phone}
                          onChange={handleChangePhone}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="phone"
                          label="핸드폰 번호"
                          name="phone"
                          autoComplete="phone"
                      />
                  </Grid>
                  <Grid item xs={6} style={{marginLeft:"3rem"}}>
                      <TextField
                          value={address}
                          onChange={handleChangeAddress}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="address"
                          label="주소"
                          name="address"
                          autoComplete="address"
                      />
                  </Grid>
                  <Grid item xs={3} >
                      <TextField
                          value={age}
                          onChange={handleChangeAge}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="age"
                          label="나이"
                          name="age"
                          autoComplete="age"
                      />
                  </Grid>
                  <Grid item xs={4} style={{marginLeft:"3rem"}}>
                      <FormControl className={classes.formControl}>
                          <InputLabel id="select-label">유형</InputLabel>
                          <Select
                          labelid="select-label"
                          id="simple-select"
                          value={grade}
                          onChange={handleChangeGrade}
                          >
                              <MenuItem value={0}>user</MenuItem>
                          <MenuItem value={1}>admin</MenuItem>
                          </Select>
                          <FormHelperText>가입 유형을 선택해주세요</FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4} style={{marginTop:"1rem"}}>
                      <FormControl component="fieldset">
                          <FormLabel component="legend" style={{display:"inline", marginBottom:"15px"}}>성별</FormLabel>
                          <RadioGroup row aria-label="position" name="position" defaultValue="top" value={gender} onChange={handleChange}>
                              <FormControlLabel
                              value="M"
                              control={<Radio color="primary" />}
                              label="남자"
                              labelPlacement="top"
                              />
                              <FormControlLabel
                              value="F"
                              control={<Radio color="primary" />}
                              label="여자"
                              labelPlacement="top"
                              />
                          </RadioGroup>
                      </FormControl>
                  </Grid>
              </Grid>
          </form>
          <Button
          style={{marginTop:"4rem"}}
            type="submit"
            onClick={handleClick}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}
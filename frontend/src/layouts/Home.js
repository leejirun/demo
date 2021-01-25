import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Footer from 'components/Footer.js';
import DashBoard from 'components/content/DashBoard.js';
import NavBar from 'components/NavBar.js';
import { Switch, Route, Redirect } from "react-router-dom";
import ProductList from 'components/content/ProductList.js';
import PostList from 'components/content/PostList.js';
import EqEnroll from 'components/content/EqEnroll.js';
import Profile from 'components/content/Profile.js';
import EqDetail from 'components/content/EqDetail.js';
import AdminList from 'components/content/AdminList.js';
import axios from 'axios';

const switchRoutes = (
  <Switch>
    <Route path="/home/dashboard" component={DashBoard} />
    <Route path="/home/profile" component={Profile}/>
    <Route path="/home/product" component={EqEnroll}/>
    <Route path="/home/products" component={ProductList}/>
    <Route path="/home/products/:id" component={EqDetail}/>
    <Route path="/home/post" component={EqEnroll}/>
    <Route path="/home/posts" component={PostList}/>
    <Route path="/home/posts/:id" component={EqDetail}/>
    <Route path="/home/admin" component={AdminList}/>
    <Redirect from="/home" to="/home/dashboard" />
  </Switch>
);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(3),
  },  
}));
export default function Home({ location, history }) {
  const classes = useStyles();
  
  function NavBarName() {
    switch (location.pathname.split("/")[2]) {
      case "admin":
        return "Admin 회원 관리";
      case "product":
        return "상품 등록";
      case "products":
        return "상품 리스트";
      case "posts":
        return "게시판";
      case "profile":
        return "유저 프로필";
      default:
        return "현황판";
    }
  }

  return (
    <div className={classes.root}>
      <NavBar themeName = {NavBarName()}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container  style={{minHeight:"100vh", backgroundColor:"#fef7e1"}} maxWidth="xl" className={classes.container}>
        {/* {
              (function() {
                  if(axios.defaults.headers.common['Authorization'] === undefined) {
                    alert("로그인 후 이용해주세요");
                    history.push('/signin');
                  }
              })()
          } */}
          {switchRoutes}
        </Container>
        <Footer/>
      </main>
    </div>
  );
}
import React, { useEffect } from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import BuildIcon from '@material-ui/icons/Build';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ExplicitIcon from '@material-ui/icons/Explicit';
import {Link} from 'react-router-dom';

import AddBoxIcon from '@material-ui/icons/AddBox';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import axios from "axios"

import styles from "assets/css/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard({location, history}) {
  const [productCount, setProductCount] = React.useState(0);
  const [postCount, setPostCount] = React.useState(0);

  const [saleLogs, setSaleLog ] = React.useState([]);
  const [userLogs, setUserLogs] = React.useState([]);

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <BuildIcon/>
              </CardIcon>
              <p style={{fontSize:"25px", color:"black"}} className={classes.cardCategory}>전체 상품 현황</p>
              <h3 style={{fontSize:"20px"}} className={classes.cardTitle}>
                {productCount} <small>개</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <AddBoxIcon />
                  <Link to="/home/eqenroll/all" style={{textDecoration:"none", color:"black"}}>
                    <h4 style={{display:"inline"}}>상품 등록</h4>
                  </Link>
                </Danger>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <CameraAltIcon />
              </CardIcon>
              <p style={{fontSize:"25px", color:"black"}} className={classes.cardCategory}>게시판 현황</p>
              <h3 style={{fontSize:"20px"}} className={classes.cardTitle}>
                {postCount} <small>개</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <AddBoxIcon />
                  <Link to="/home/eqenroll/camera" style={{textDecoration:"none", color:"black"}}>
                    <h4 style={{display:"inline"}}>게시글 등록</h4>
                  </Link>
                </Danger>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
     
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>최근 상품 구입 로그</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["로그번호", "구입 상품", "요청 시기"]}
                  tableData={saleLogs}
                />
              </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>최근 로그인/아웃 로그</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["아이디", "로그인/아웃", "날짜"]}
                tableData={userLogs}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

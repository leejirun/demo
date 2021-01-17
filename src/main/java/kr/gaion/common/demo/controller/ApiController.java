//package kr.gaion.common.demo.controller;
//
//import kr.gaion.common.demo.model.UserVO;
//import kr.gaion.common.demo.service.ApiService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.HashMap;
//import java.util.List;
//
//@RestController
//public class ApiController {
//
//    private final Logger logger = LoggerFactory.getLogger(this.getClass());
//
//    @Autowired
//    ApiService service;
//
//    @GetMapping(path = "/user")
//    public ResponseEntity<List<UserVO>> hello(){
//        List<UserVO> userList = service.getAllUser();
//        return new ResponseEntity<List<UserVO>>(userList, HttpStatus.OK);
//    }
//}

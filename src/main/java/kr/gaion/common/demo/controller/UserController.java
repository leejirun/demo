package kr.gaion.common.demo.controller;
import kr.gaion.common.demo.model.UserForm;
import kr.gaion.common.demo.model.UserVO;
import kr.gaion.common.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;



@Controller
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;
    
    //회원가입
    @PostMapping(path = "/user/signup")
    public ResponseEntity<HashMap<String, Object>> signup(@RequestBody UserForm form) {
        HashMap<String, Object> resultMap = userService.signUp(form);
        System.out.println(resultMap);
        return new ResponseEntity<HashMap<String, Object>>(resultMap, HttpStatus.OK);
    }

    //로그인
    @PostMapping(path = "/user/signin")
    public ResponseEntity<HashMap> signin(@RequestBody HashMap<String, Object> paramMap) {
        HashMap<String, Object> resultMap = userService.signIn(paramMap);
        return new ResponseEntity<HashMap>(resultMap, HttpStatus.OK);
    }


    //회원 정보 전체 조회
    @GetMapping(path = "/user")
    public ResponseEntity<List<UserVO>> userall(){
        List<UserVO> userList = userService.getAllUser();
        return new ResponseEntity<List<UserVO>>(userList, HttpStatus.OK);
    }

    //회원 정보 수정
    @PutMapping(path = "/user/update/{idx}")
    public ResponseEntity<HashMap<String, Object>> userupdate(@RequestBody UserForm form){
        HashMap<String, Object> resultMap = userService.userupdate(form);
        return new ResponseEntity<HashMap<String,Object>>(resultMap, HttpStatus.OK);
    }
    
    //회원 삭제
    @DeleteMapping(path = "/user/delete/{idx}")
    public ResponseEntity<HashMap> userdelete(@PathVariable int idx){
        HashMap<String, Object> resultMap = userService.userdelete(idx);
        return new ResponseEntity<HashMap>(resultMap, HttpStatus.OK);

    }

}


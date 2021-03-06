package kr.gaion.common.demo.controller;
import ch.qos.logback.core.encoder.EchoEncoder;
import kr.gaion.common.demo.model.UserForm;
import kr.gaion.common.demo.model.UserVO;
import kr.gaion.common.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserService userService;

    //회원가입
    @PostMapping(path = "/signup")
    public ResponseEntity<HashMap<String, Object>> signup(@RequestBody UserForm form) {
        HashMap<String, Object> resultMap = userService.signUp(form);
        System.out.println(resultMap);

        return new ResponseEntity<HashMap<String, Object>>(resultMap, HttpStatus.OK);
    }

    //로그인
    @PostMapping(path = "/signin")
    public ResponseEntity<HashMap> signin(@RequestBody HashMap<String, Object> paramMap) {
        HashMap<String, Object> resultMap = userService.signIn(paramMap);
        return new ResponseEntity<HashMap>(resultMap, HttpStatus.OK);
    }

    //회원 정보 전체 조회
    @GetMapping(path = "/user")
    public ResponseEntity<List<UserVO>> userall() {
        List<UserVO> userList = userService.getAllUser();
        return new ResponseEntity<List<UserVO>>(userList, HttpStatus.OK);
    }

    //회원 프로픨 조회
    @GetMapping(path = "/user/profile")
    public ResponseEntity<HashMap<String, Object>> userprofile(HttpServletRequest request) {
        System.out.println("controller - user_idx : "+request.getAttribute("user_idx"));
        HashMap<String, Object> resultMap = new HashMap<String, Object>();

        try {
            int user_idx = Integer.parseInt(request.getAttribute("user_idx").toString());
            System.out.println(user_idx);
            resultMap = userService.userprofile(user_idx);
            resultMap.put("message", "프로필 정보 조회 성공");
        } catch (Exception e) {
            resultMap.put("message", "프로필 정보 조회 실패");
        }

        return new ResponseEntity<HashMap<String, Object>>(resultMap, HttpStatus.OK);
    }

    //회원 프로필 정보 수정
    @PutMapping(path = "/user/update")
    public ResponseEntity<HashMap<String, Object>> userupdate(@RequestBody UserForm form, HttpServletRequest request) {
        HashMap<String, Object> resultMap = new HashMap<String, Object>();
//        System.out.println(">>>" + request.getAttribute("user_idx"));
        try {
            int user_idx = Integer.parseInt(request.getAttribute("user_idx").toString());
            resultMap = userService.userupdate(user_idx, form);
            resultMap.put("message", "성공");

        } catch (Exception e) {
            resultMap.put("message", "실패");
        }
        return new ResponseEntity<HashMap<String, Object>>(resultMap, HttpStatus.OK);
    }

    //회원 프로필 정보 삭제(탈퇴)
    @DeleteMapping(path = "/user/delete")
    public ResponseEntity<HashMap> userdelete(HttpServletRequest request) {
        System.out.println(">>>>: "+request.getAttribute("user_idx"));
        HashMap<String,Object> resultMap = new HashMap<>();
        try{
            int user_idx = Integer.parseInt(request.getAttribute("user_idx").toString());
            resultMap = userService.userdelete(user_idx);
            resultMap.put("message","회원 탈퇴 성공");
            return new ResponseEntity<HashMap>(resultMap, HttpStatus.OK);
        }catch (Exception e){
            resultMap.put("message", "회원 탈퇴 실패");
            return new ResponseEntity<HashMap>(resultMap, HttpStatus.BAD_REQUEST);

        }
    }


}
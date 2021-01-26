package kr.gaion.common.demo.service;

import kr.gaion.common.demo.model.UserForm;
import kr.gaion.common.demo.model.UserVO;
import kr.gaion.common.demo.repository.UserRepository;

import kr.gaion.common.demo.util.JwtTokenProvider;
import org.apache.catalina.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@Service
public class UserService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;


    public HashMap<String, Object> signUp(UserForm form) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            UserVO newuser = new UserVO(form);
            newuser.setUser_pw(passwordEncoder.encode(newuser.getUser_pw()));
            UserVO result = userRepository.save(newuser);

            if(result ==null) throw new Exception();
            resultMap.put("message", "회원가입 성공");

        }catch(Exception e) {
            resultMap.put("message", "회원가입 실패");
            System.out.println(resultMap);
        }
        return resultMap;
    }

    public HashMap<String, Object> signIn(HashMap<String, Object> paramMap) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            UserVO user = userRepository.signIn(paramMap.get("user_id").toString());

            //추가
            if(user != null && passwordEncoder.matches(paramMap.get("user_pw").toString(),
                user.getUser_pw())){

                String token = jwtTokenProvider.createToken(Integer.toString(user.getUser_idx()));
                resultMap.put("accessToken", token);
                resultMap.put("user", user);
                resultMap.put("message", "로그인 성공");
            }else{
                resultMap.put("message", "해당 id 혹은 비밀번호가 틀렸습니다.");
            }
        }catch (Exception e) {
            resultMap.put("message", "로그인 실패");
            System.out.println(e);
            System.out.println("message");
        }
        return resultMap;
    }

    public List<UserVO> getAllUser() {
        List<UserVO> userList = new ArrayList<>();
        userRepository.findAll().forEach(e -> userList.add(e));
        System.out.println(userRepository.findAll());
        return userList;
    }


    public HashMap<String, Object> userdelete(int idx) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            int result = userRepository.delete(idx);
            resultMap.put("message", "회원 탈퇴 성공");
        }catch (Exception e){
            resultMap.put("message", "회원 탈퇴 실패");
        }
        return resultMap;
    }

    public HashMap<String, Object> userprofile(int user_idx) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            if(user_idx != 0) {
                UserVO user = userRepository.userprofile(user_idx);
                resultMap.put("user", user);
                resultMap.put("message", "user_idx");
                resultMap.put("message", "성공");
            }
        }catch (Exception e){
            resultMap.put("message","실패");
        }
        return resultMap;
    }

    public HashMap<String, Object> userupdate(int user_idx, UserForm form) {
        HashMap<String, Object> resultMap = new HashMap<>();

        try{
            String user_pw = passwordEncoder.encode(form.getUser_pw());
            String user_address = form.getUser_address();
            String user_phone = form.getUser_phone();
            String user_email = form.getUser_email();

            int result = userRepository.userupdate(user_idx, user_pw, user_address, user_phone, user_email);
            //resultMap은 HttpResponse를 위한 데이터형으로 활용하는 용도, put해서 넣어준 값만 있을 뿐!
            resultMap.put("result", result);
            resultMap.put("message","회원 수정 성공");

        }catch (Exception e){
            resultMap.put("message","회원 수정 실패");
            System.out.println(e);
        }
        return resultMap;
    }

}

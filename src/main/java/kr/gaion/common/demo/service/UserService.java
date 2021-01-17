package kr.gaion.common.demo.service;

import kr.gaion.common.demo.model.UserForm;
import kr.gaion.common.demo.model.UserVO;
import kr.gaion.common.demo.repository.UserRepository;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.jws.soap.SOAPBinding;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRepository userRepository;

    public HashMap<String, Object> signUp(UserForm form) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            UserVO newuser = new UserVO(form);
            UserVO result = userRepository.save(newuser);

            if(result ==null) throw new Exception();

            resultMap.put("message", "회원가입 성공");
        }catch(Exception e) {
            resultMap.put("message", "회원가입 실패");
        }
        return resultMap;
    }

    public HashMap<String, Object> signIn(HashMap<String, Object> paramMap) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            UserVO user = userRepository.signIn(paramMap.get("id").toString(),
                    paramMap.get("pw").toString());

            resultMap.put("user", user);
            resultMap.put("message", "로그인 성공");
        }catch (Exception e) {
            resultMap.put("message", "로그인 실패");
        }
        return resultMap;
    }

    public List<UserVO> getAllUser() {
        List<UserVO> userList = new ArrayList<>();
        userRepository.findAll().forEach(e -> userList.add(e));
        System.out.println(userRepository.findAll());
        return userList;
    }


  //  public Optional<UserVO> findById(int idx) {
   //     Optional<UserVO> userlist = userRepository.findById((long) idx);
   //     System.out.println(userRepository.findById((long) idx));
  //      return userlist;
  //  }

    public HashMap<String, Object> userupdate(UserForm form) {
        HashMap<String, Object> resultMap = new HashMap<>();
        try{
            userRepository.update(form.getUser_idx(),form.getUser_pw());
            resultMap.put("message","회원 수정 성공");
        }catch (Exception e){
            System.out.println(e);
            resultMap.put("message","회원 수정 실패");
        }
        return resultMap;
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

}

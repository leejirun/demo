package kr.gaion.common.demo.service;

import kr.gaion.common.demo.model.UserVO;
import kr.gaion.common.demo.dto.UserForm;
import kr.gaion.common.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    @Transactional
    public String createUser(UserForm form){
        UserVO user = form.toEntity();
        userRepository.save(user);
        return user.getUser_id();
    }


}

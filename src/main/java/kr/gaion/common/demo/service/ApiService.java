package kr.gaion.common.demo.service;

import kr.gaion.common.demo.model.UserVO;
import kr.gaion.common.demo.repository.ApiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApiService {

    @Autowired
    private ApiRepository repository;

    public List<UserVO> getAllUser() {
        System.out.println("service");
        List<UserVO> userList = new ArrayList<>();
        repository.findAll().forEach(e -> userList.add(e));
        System.out.println(repository.findAll());
        return userList;
    }
}

package kr.gaion.common.demo.repository;

import kr.gaion.common.demo.model.UserVO;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {



    //로그인 쿼리
    @Query(
            value = "select *" +
                    "from user " +
                    "where user_id = :id and user_pw = :pw",
            nativeQuery = true)
    UserVO signIn(String id, String pw);
    
    //회원 정보 수정
    @Transactional
    @Modifying
    @Query(value = "update user set user_pw = :pw where user_idx = :idx", nativeQuery = true)
    int update(int idx, String pw);
    
    //휘원 삭제
    @Transactional
    @Modifying
    @Query(
        value = "delete from user where user_idx = :idx",
            nativeQuery = true)
    int delete(int idx);


}


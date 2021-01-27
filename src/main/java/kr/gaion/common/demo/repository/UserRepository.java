package kr.gaion.common.demo.repository;

import kr.gaion.common.demo.model.UserForm;
import kr.gaion.common.demo.model.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


//UserRepository는 interface로 JpaRepository<UserVO, Long>를 구현함으로써, User Entity의 영속성 관리를
//하며 User와 관련된 CRUD 메소드를 자동으로 생성한다.

@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {

    //로그인 쿼리
    @Query(
            value = "select *" +
                    "from user " +
                    "where user_id = :id",
            nativeQuery = true)
    UserVO signIn(String id);
    
    //회원 프로필
    @Query(
            value = "select * from user where user_idx = :user_idx",
            nativeQuery = true
    )
    UserVO userprofile(int user_idx);
    
    //회원 프로필 수정
    //회원 정보 수정
    @Transactional
    @Modifying
    @Query(value = "update user set user_pw = :user_pw, user_address = :user_address," +
            " user_phone = :user_phone, user_email = :user_email " +
            " where user_idx = :user_idx",
            nativeQuery = true
    )
    int userupdate(int user_idx, String user_pw, String user_address, String user_phone, String user_email);


    //휘원 삭제
    @Transactional
    @Modifying
    @Query(
            value = "delete from user where user_idx = :user_idx",
            nativeQuery = true)
    int delete(int user_idx);
}


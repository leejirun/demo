package kr.gaion.common.demo.repository;

import kr.gaion.common.demo.model.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {

    @Query(
            value = "select *" +
                    "from user " +
                    "where user_id = :id and user_pw = :pw",
            nativeQuery = true)
    UserVO signIn(String id, String pw);

    @Transactional
    @Modifying
    @Query(value = "update user set user_pw = :pw where user_idx = :idx", nativeQuery = true)
    int update(int idx, String pw);

    @Transactional
    @Modifying
    @Query(
        value = "delete from user where user_idx = :idx",
            nativeQuery = true)
    int delete(int idx);



}


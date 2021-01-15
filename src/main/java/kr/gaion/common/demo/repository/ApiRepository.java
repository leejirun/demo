package kr.gaion.common.demo.repository;

import kr.gaion.common.demo.model.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApiRepository extends JpaRepository<UserVO, Long> {
}

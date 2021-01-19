package kr.gaion.common.demo.model;
//테이블에 필요한 컬럼, 우리가 입력받을 때 user_idx같은 입력받지 않은 것들을 빼고 필요한 것만 입력받으려는 vo 객체
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class UserForm {

    @Column
    private int user_idx;
    @Column
    private String user_id;
    @Column
    private String user_pw;
    @Column
    private String user_name;
    @Column
    private String user_address;
    @Column
    private String user_phone;
    @Column
    private String user_email;
    @Column
    private int user_age;
    @Column
    private char user_gender;

}

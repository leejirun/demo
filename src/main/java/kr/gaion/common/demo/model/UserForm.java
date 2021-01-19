package kr.gaion.common.demo.model;

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

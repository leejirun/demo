package kr.gaion.common.demo.dto;

import kr.gaion.common.demo.model.UserVO;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Data
@NoArgsConstructor
public class UserForm {

    private String user_id;
    private String user_pw;
    private String user_name;
    private String user_address;
    private String user_phone;
    private String user_email;

    @Builder
    public UserForm(String user_id, String user_pw, String user_name, String user_address, String user_phone, String user_email){
        this.user_id = user_id;
        this.user_pw = user_pw;
        this.user_name = user_name;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.user_email = user_email;
    }

    public UserVO toEntity(){
        return UserVO.builder()
                .user_id(user_id)
                .user_pw(user_pw)
                .user_name(user_name)
                .user_address(user_address)
                .user_phone(user_phone)
                .user_email(user_email)
                .build();
    }

}

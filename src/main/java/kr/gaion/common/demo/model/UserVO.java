package kr.gaion.common.demo.model;

import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity(name = "user")
public class UserVO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private Date created_at;
    @Column
    private Date updated_at;

    @Builder
    public UserVO(String user_id, String user_pw, String user_name, String user_address, String user_phone, String user_email, Date created_at, Date updated_at) {
        this.user_id = user_id;
        this.user_pw = user_pw;
        this.user_name = user_name;
        this.user_address = getUser_address();
        this.user_phone = user_phone;
        this.user_email = user_email;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    @Builder
    public UserVO(UserForm form) {
        this.user_id = form.getUser_id();
        this.user_pw = form.getUser_pw();
        this.user_name = form.getUser_name();
        this.user_address = form.getUser_address();
        this.user_phone = form.getUser_phone();
        this.user_email = form.getUser_email();
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

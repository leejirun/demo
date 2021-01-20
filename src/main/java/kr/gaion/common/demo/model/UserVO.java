package kr.gaion.common.demo.model;
//디비랑 연결되는 아이
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
    @Column
    private int user_age;
    @Column
    private char user_gender;
    @Column
    private int user_grade;

    @Builder
    public UserVO(String user_id, String user_pw, String user_name, String user_address,
                  String user_phone, String user_email, Date created_at, Date updated_at,
                  int user_age, char user_gender, int user_grade) {
        this.user_id = user_id;
        this.user_pw = user_pw;
        this.user_name = user_name;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.user_email = user_email;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.user_age = user_age;
        this.user_gender = user_gender;
        this.user_grade = user_grade;
    }

    @Builder
    public UserVO(UserForm form) {
        this.user_id = form.getUser_id();
        this.user_pw = form.getUser_pw();
        this.user_name = form.getUser_name();
        this.user_address = form.getUser_address();
        this.user_phone = form.getUser_phone();
        this.user_email = form.getUser_email();
        this.user_age = form.getUser_age();
        this.user_gender = form.getUser_gender();
        this.user_grade = form.getUser_grade();
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

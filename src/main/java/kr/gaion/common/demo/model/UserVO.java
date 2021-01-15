package kr.gaion.common.demo.model;


import lombok.*;
import javax.persistence.*;
import java.time.DateTimeException;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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
    public UserVO(String user_id, String user_pw) {
        this.user_id = user_id;
        this.user_pw = user_pw;
    }
}

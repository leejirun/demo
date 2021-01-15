package kr.gaion.common.demo.controller;

import kr.gaion.common.demo.dto.UserForm;
import kr.gaion.common.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;


@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    //userForm이라는 객체를 html에 전달
    @GetMapping(path = "/loginUser")
    public String createUserForm(Model model){
        model.addAttribute("userForm", new UserForm());
        return "user/login/register";
    }

    //회원가입 처리
//    @PostMapping(path = "/loginUser")
//    public String createUserForm(@Valid UserForm form, BindingResult result ){
//       if(result.hasErrors()){
//           return "user/login/register";
//       }
//       userService.createUser(form);
//       return "redirect:/";
//    }
    }

package kr.gaion.common.demo.util;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//WebMvcConfigurer에 WebMvcConfig를 주입하기 위해서는 레게시로 짤땐 XML파일에 Bean설정을 해주ㅁ지만
// XML 설정 파일을 대신하는 Java Class에 Bean설정을 만들어주어 해결할 수 도 있다.
//하지만 @Autowired를 사용하는 경우 객체의 의존성을 가지는 부분에 간단히 사용하면 쉽게 의존성을 받을 수 있게 된다.
//의존성 주입 타켓이 되는 class 역시 당연히 Bean으로 등록이 되기 위한 @Repository어노테이션이 부여되어 있다는 것을 주목해야함


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    private final BearerAuthInterceptor bearerAuthInterceptor;

    public WebMvcConfig(BearerAuthInterceptor bearerAuthInterceptor) {
        this.bearerAuthInterceptor = bearerAuthInterceptor;
    }

    public void addInterceptors(InterceptorRegistry registry){
        System.out.println(">>> 인터셉터 등록");
        registry.addInterceptor(bearerAuthInterceptor).addPathPatterns("/user/profile");
        registry.addInterceptor(bearerAuthInterceptor).addPathPatterns("/user/update");
    }
}
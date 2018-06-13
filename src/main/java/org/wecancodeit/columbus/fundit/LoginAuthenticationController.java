package org.wecancodeit.columbus.fundit;

import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class LoginAuthenticationController {

    @Resource
    LoginRepository loginRepo;



}

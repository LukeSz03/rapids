package backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    public HashMap<String, Object> helloWorld() {
        HashMap<String, Object> response = new HashMap<>();
        response.put("message", "Hello, World");
        return response;
    }
}
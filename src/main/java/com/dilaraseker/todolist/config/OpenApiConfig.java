package com.dilaraseker.todolist.config;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI baseOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Todo List Full-Stack Project OpenAPI Docs")
                        .version("1.0.0")
                        .description("Document Description")
                        .contact(new Contact()
                                .name("Dilara")
                                .email("dlrseker@gmail.com"))
                );
    }

}
package com.thanhtam.thanhtamluxury.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class StaticResourceConfiguration implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploadImages/**")
                .addResourceLocations("file:../uploadImages/")
                .setCachePeriod(2 * 60 * 60); // 2 hours

        registry.addResourceHandler("/**").addResourceLocations("classpath:/public/")
                                                      .setCachePeriod(2 * 60 *60 ); // 2 hours


        registry.addResourceHandler("/swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

        // them vao de fix loi khong go truc tiep len thanh address
        // chua hieu lam se tim hieu sau

        registry.addViewController("/")
                .setViewName("forward:/index.html");

        // Map "/word", "/word/word", and "/word/word/word" - except for anything starting with "/api/..." or ending with
        // a file extension like ".js" - to index.html. By doing this, the client receives and routes the url. It also
        // allows client-side URLs to be bookmarked.

        // Single directory level - no need to exclude "api"
        registry.addViewController("/{x:[\\w\\-]+}")
                .setViewName("forward:/index.html");
        // Multi-level directory path, need to exclude "api" on the first part of the path
        registry.addViewController("/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}")
                .setViewName("forward:/index.html");
    }
}

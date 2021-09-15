package com.example.tacos;

import com.example.tacos.data.IngredientRepository;
import com.example.tacos.data.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

@Profile("!prod")
@Configuration
public class DevelopmentConfig {

    @Bean
    public CommandLineRunner dataLoader(IngredientRepository ingredientRepository,
                                        UserRepository userRepository,
                                        PasswordEncoder encoder) {
        return args -> {
            ingredientRepository.save(new Ingredient("FLTO", "Flour Tortilla", Ingredient.Type.WRAP));
            ingredientRepository.save(new Ingredient("COTO", "Corn Tortilla", Ingredient.Type.WRAP));
            ingredientRepository.save(new Ingredient("GRBF", "Ground Beef", Ingredient.Type.PROTEIN));
            ingredientRepository.save(new Ingredient("CARN", "Carnitas", Ingredient.Type.PROTEIN));
            ingredientRepository.save(new Ingredient("TMTO", "Diced Tomatoes", Ingredient.Type.VEGGIES));
            ingredientRepository.save(new Ingredient("LETC", "Lettuce", Ingredient.Type.VEGGIES));
            ingredientRepository.save(new Ingredient("CHED", "Cheddar", Ingredient.Type.CHEESE));
            ingredientRepository.save(new Ingredient("JACK", "Monterrey Jack", Ingredient.Type.CHEESE));
            ingredientRepository.save(new Ingredient("SLSA", "Salsa", Ingredient.Type.SAUCE));
            ingredientRepository.save(new Ingredient("SRCR", "Sour Cream", Ingredient.Type.SAUCE));

            userRepository.save(
                    new User("riadh", encoder.encode("riadh"),
                            "Riadh Laabidi", "Some street", "Some city",
                            "Some State", "Some zip", "Some phone number")
            );
        };
    }
}

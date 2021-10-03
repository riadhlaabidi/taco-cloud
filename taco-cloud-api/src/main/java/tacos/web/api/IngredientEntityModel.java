package tacos.web.api;

import org.springframework.hateoas.EntityModel;
import lombok.Getter;
import tacos.Ingredient;
import tacos.Ingredient.Type;

public class IngredientEntityModel extends EntityModel<IngredientEntityModel> {

    @Getter
    private final String name;

    @Getter
    private final Type type;

    public IngredientEntityModel(Ingredient ingredient) {
        this.name = ingredient.getName();
        this.type = ingredient.getType();
    }
}

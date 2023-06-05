import { doesRandiLikeThisDessert } from "./script";
import { Dessert } from "./src/models";

describe("With a list of desserts", () => {
  it.each`
    name                                      | hasFruit | fruit           | temperature    | fruitSize    | locationOfFruit | servedWith            | expectedResult
    ${"coconut"}                              | ${true}  | ${"coconut"}    | ${"cold"}      | ${"chunks"}  | ${"top"}        | ${[]}                 | ${true}
    ${"kiwi"}                                 | ${true}  | ${"kiwi"}       | ${"cold"}      | ${"whole"}   | ${"top"}        | ${[]}                 | ${true}
    ${"chocolate ice cream"}                  | ${false} | ${undefined}    | ${"cold"}      | ${undefined} | ${undefined}    | ${undefined}          | ${true}
    ${"strawberry ice cream"}                 | ${true}  | ${"strawberry"} | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${["whipped cream"]}  | ${true}
    ${"coconut cream pie"}                    | ${true}  | ${"coconut"}    | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"lemon meringue pie"}                   | ${true}  | ${"lemon"}      | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"key lime pie"}                         | ${true}  | ${"lime"}       | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"orange sherbet"}                       | ${true}  | ${"orange"}     | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"apple turnover"}                       | ${true}  | ${"apple"}      | ${"hot"}       | ${"chunks"}  | ${"inside"}     | ${[]}                 | ${true}
    ${"plain yogurt"}                         | ${false} | ${undefined}    | ${"cold"}      | ${undefined} | ${undefined}    | ${[]}                 | ${true}
    ${"plain yogurt with added strawberries"} | ${true}  | ${"strawberry"} | ${"cold"}      | ${"bits"}    | ${"mixed"}      | ${["added-in fruit"]} | ${true}
    ${"strawberry yogurt with bits"}          | ${true}  | ${"strawberry"} | ${"cold"}      | ${"bits"}    | ${"mixed"}      | ${[]}                 | ${true}
    ${"chocolate cup cake"}                   | ${false} | ${undefined}    | ${"room temp"} | ${undefined} | ${undefined}    | ${undefined}          | ${true}
    ${"fruit cup"}                            | ${true}  | ${"various"}    | ${"cold"}      | ${"chunks"}  | ${"mixed"}      | ${[]}                 | ${true}
    ${"blueberry muffins"}                    | ${true}  | ${"blueberry"}  | ${"room temp"} | ${"bits"}    | ${"mixed"}      | ${[]}                 | ${true}
    ${"lime popsicle"}                        | ${true}  | ${"lime"}       | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"raspberry tiramisu"}                   | ${true}  | ${"raspberry"}  | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"tiramisu"}                             | ${false} | ${undefined}    | ${"cold"}      | ${undefined} | ${undefined}    | ${undefined}          | ${true}
    ${"Lemon Blueberry Poke Cake"}            | ${true}  | ${"blueberry"}  | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${true}
    ${"peaches and cream pie"}                | ${true}  | ${"peaches"}    | ${"cold"}      | ${"chunks"}  | ${"mixed"}      | ${[]}                 | ${false}
    ${"raspberry peach upside down cake"}     | ${true}  | ${"raspberry"}  | ${"hot"}       | ${"chunks"}  | ${"top"}        | ${[]}                 | ${false}
    ${"strawberry cheesecake bars"}           | ${true}  | ${"strawberry"} | ${"cold"}      | ${"puree"}   | ${"mixed"}      | ${[]}                 | ${false}
    ${"banana"}                               | ${true}  | ${"banana"}     | ${"cold"}      | ${"whole"}   | ${"top"}        | ${[]}                 | ${false}
    ${"banana pudding"}                       | ${true}  | ${"banana"}     | ${"cold"}      | ${"chunks"}  | ${"mixed"}      | ${[]}                 | ${false}
    ${"cheesecake"}                           | ${false} | ${undefined}    | ${"cold"}      | ${undefined} | ${undefined}    | ${undefined}          | ${false}
    ${"pineapple upside-down cake"}           | ${true}  | ${"pineapple"}  | ${"hot"}       | ${"chunks"}  | ${"top"}        | ${[]}                 | ${false}
    ${"mixed fruit tart"}                     | ${true}  | ${"various"}    | ${"cold"}      | ${"whole"}   | ${"mixed"}      | ${["glaze"]}          | ${false}
    ${"blueberry muffin with chunks"}         | ${true}  | ${"blueberry"}  | ${"room temp"} | ${"chunks"}  | ${"mixed"}      | ${[]}                 | ${false}
    ${"blueberry muffin with whole berries"}  | ${true}  | ${"blueberry"}  | ${"room temp"} | ${"whole"}   | ${"mixed"}      | ${[]}                 | ${false}
    ${"banana split"}                         | ${true}  | ${"banana"}     | ${"cold"}      | ${"whole"}   | ${"top"}        | ${["whipped cream"]}  | ${false}
    ${"peach cobbler"}                        | ${true}  | ${"peaches"}    | ${"hot"}       | ${"chunks"}  | ${"inside"}     | ${[]}                 | ${false}
    ${"apple pie"}                            | ${true}  | ${"apple"}      | ${"hot"}       | ${"chunks"}  | ${"inside"}     | ${[]}                 | ${false}
    ${"cherry pie"}                           | ${true}  | ${"cherry"}     | ${"hot"}       | ${"chunks"}  | ${"inside"}     | ${[]}                 | ${false}
    ${"peach turnover"}                       | ${true}  | ${"peach"}      | ${"hot"}       | ${"chunks"}  | ${"inside"}     | ${[]}                 | ${false}
    ${"strawberry yogurt with chunks"}        | ${true}  | ${"strawberry"} | ${"cold"}      | ${"chunks"}  | ${"mixed"}      | ${[]}                 | ${false}
    ${"strawberry short cake"}                | ${true}  | ${"strawberry"} | ${"cold"}      | ${"chunks"}  | ${"mixed"}      | ${[]}                 | ${false}
  `(
    "Randi likes $name: $expectedResult",
    ({
      name,
      hasFruit,
      fruit,
      temperature,
      fruitSize,
      locationOfFruit,
      servedWith,
      expectedResult,
    }) => {
      const dessert: Dessert = {
        name,
        hasFruit,
        fruit,
        temperature,
        fruitSize,
        locationOfFruit,
        servedWith,
      };

      const result = doesRandiLikeThisDessert(dessert);
      expect(result).toBe(expectedResult);
    }
  );
});

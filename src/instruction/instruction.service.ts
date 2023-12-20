import * as InstructionRepository from "./instruction.repository";

export const getInstructionsOfMeal = async (mealId: number) => {
  const instructions = await InstructionRepository.getInstructionsOfMeal(
    mealId
  );
  if (!instructions || !instructions.length) {
    return instructions;
  }

  instructions.sort((i1, i2) => i1.sequence - i2.sequence);
  return instructions;
};

import { DietType, DishType } from '@enums';

export type SearchType =
    | (typeof DietType)[keyof typeof DietType]
    | (typeof DishType)[keyof typeof DishType];

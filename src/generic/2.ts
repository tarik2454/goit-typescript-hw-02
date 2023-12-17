/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, T>
): Partial<AllType> {
  const result: Partial<AllType> = {};

  if ('name' in top && typeof top.name === 'string') result.name = top.name;
  if ('color' in top && typeof top.color === 'string') result.color = top.color;
  if ('position' in bottom && typeof bottom.position === 'number')
    result.position = bottom.position;
  if ('weight' in bottom && typeof bottom.weight === 'number')
    result.weight = bottom.weight;

  return result;
}

export {};

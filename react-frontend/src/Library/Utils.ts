/*
  Utils.ts

  Small and often used utility functions without any dependencies. Elsewhere
  it's easy go get into the struggle of circular dependencies.
*/

export const isNil = (data: unknown): data is null | undefined =>
  data === null || data === undefined

export const orDefault = <T>(data: T, defaultValue: T): T =>
  (isNil(data))
    ? defaultValue
    : data
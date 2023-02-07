type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods?: Mods, additional?: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      // .filter(([className]) => className)
      .map(([className, value]) => className)
  ].join(' ');
};

// classNames('remove-btn', { hovered: true, selectable: true, red: true }, ['additional', 'classes']);
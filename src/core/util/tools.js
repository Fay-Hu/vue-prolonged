export function createSafeContext() {
  return Object.create({});
}

export const safeObjectContext = createSafeContext();

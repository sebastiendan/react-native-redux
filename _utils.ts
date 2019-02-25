export function delay(ms: number) {
  return (x: any) => {
    return new Promise(resolve => setTimeout(() => resolve(x), ms)) as Promise<
      any
    >
  }
}

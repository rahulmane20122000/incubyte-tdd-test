import add from "./index";



describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return sum for comma-separated numbers', () => {
    expect(add("1,2,3")).toBe(6);
  });

  test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});

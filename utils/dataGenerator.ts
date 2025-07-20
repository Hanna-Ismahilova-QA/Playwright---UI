export class DataGenerator {
  /**
   * Generates a random number within the specified range (inclusive).
   * @param min Minimum value (inclusive)
   * @param max Maximum value (inclusive)
   * @returns Random number
   */
  static getRandomNumber(min: number = 0, max: number = 1000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generates a random alphanumeric string of specified length.
   * @param length Length of the string
   * @returns Random string
   */
  static getRandomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  /**
   * Generates a random string with letters only.
   * @param length Length of the string
   * @returns Random alphabetic string
   */
  static getRandomAlphaString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  /**
   * Generates a random email address.
   * @returns Random email string
   */
  static getRandomEmail(): string {
    const username = this.getRandomString(8);
    const domain = this.getRandomString(5);
    return `${username}@${domain}.com`;
  }
}

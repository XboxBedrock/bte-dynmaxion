class BTEDynmaxionProjection {
  /**
   * @param {number} x
   * @param {number} y
   * @returns {[number, number]}
   */
  toGeo(x: number, y: number): [number, number];

  /**
   * @param {number} long
   * @param {number} lat
   * @returns {[number, number]}
   */
  fromGeo(long: number, lat: number): [number, number];

  metersPerUnit(): number;

  bounds(): [number, number, number, number];

  upright(): boolean;

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} north
   * @param {number} east
   * @returns {[number, number]}
   */
  vector(x: number, y: number, north: number, east: number): [number, number];

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} angle
   * @param {number} [d]
   * @returns {number}
   */
  azimuth(x: number, y: number, angle: number, d?: number): number;
}

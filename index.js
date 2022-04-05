// @ts-check
var java = require('java');
var jarfile = "terraminus.jar";


const BTE_GENERATOR_SETTINGS = JSON.stringify({
    "projection": {
        "scale": {
            "delegate": {
                "flip_vertical": {
                    "delegate": {
                        "bte_conformal_dymaxion": {}
                    }
                }
            },
            "x": 7318261.522857145,
            "y": 7318261.522857145
        }
    },
    "useDefaultHeights": true,
    "useDefaultTrees": true,
    "version": 2
})

module.exports = class BTEDymaxionProjection {

    constructor() {
        java.classpath.push(jarfile);
        var EarthGeneratorSettings = java.import("net.buildtheearth.terraminusminus.generator.EarthGeneratorSettings");
        this.projection = EarthGeneratorSettings.parseSync(BTE_GENERATOR_SETTINGS).projectionSync();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @returns {[number, number]}
     */
    toGeo(x, y) {
        const coords = this.projection.toGeoSync(x, y);
        return [coords[0], coords[1]];
    }

    /**
     * @param {number} long
     * @param {number} lat
     * @returns {[number, number]}
     */
    fromGeo(long, lat) {
        const coords = this.projection.fromGeoSync(long, lat);
        return [coords[0], coords[1]];
    }

    metersPerUnit() {
        return this.projection.metersPerUnitSync();
    }

    bounds() {
        const bounds = this.projection.boundsSync();
        return [bounds[0], bounds[1], bounds[2], bounds[3]];
    }

    upright() {
        return this.projection.uprightSync();
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} north 
     * @param {number} east 
     * @returns {[number, number]}
     */
    vector(x, y, north, east) {
        const vector = this.projection.vectorSync(x, y, north, east);
        return [vector[0], vector[1]];
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} angle
     * @param {number} [d]
     * @returns {number}
     */
    azimuth(x, y, angle, d = 1E-5) {
        return this.projection.azimuthSync(x, y, angle, d);
    }
}
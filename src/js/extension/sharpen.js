/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Sharpen extending fabric.Image.filters.Convolute
 */
import fabric from 'fabric/dist/fabric.require';

const Sharpen = fabric.util.createClass(fabric.Image.filters.Convolute, /** @lends Convolute.prototype */{
    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sharpen',

    /**
     * constructor
     * @override
     */
    initialize() {
        this.matrix = [
            -0.3, -0.3, -0.3,
            -0.3, 3.4, -0.3,
            -0.3, -0.3, -0.3
        ];
    }
});

module.exports = Sharpen;

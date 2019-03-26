/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Sharpen extending fabric.Image.filters.Convolute
 */
import fabric from 'fabric/dist/fabric.require';

const Sharpen2 = fabric.util.createClass(fabric.Image.filters.Convolute, /** @lends Convolute.prototype */{
    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sharpen2',

    /**
     * constructor
     * @override
     */
    initialize() {
        this.matrix = [
            0, -0.5, -0,
            -0.5, 3, -0.5,
            0, -0.5, -0
        ];
    }
});

module.exports = Sharpen2;

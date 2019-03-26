/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview Sharpen extending fabric.Image.filters.Convolute
 */
import fabric from 'fabric/dist/fabric.require';

const Sharpen3 = fabric.util.createClass(fabric.Image.filters.Convolute, /** @lends Convolute.prototype */{
    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sharpen3',

    /**
     * constructor
     * @override
     */
    initialize() {
        this.matrix = [
            0, -1, 0,
            -1, 5, -1,
            0, -1, 0
        ];
    }
});

module.exports = Sharpen3;

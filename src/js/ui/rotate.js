import Submenu from './submenuBase';
import templateHtml from './template/submenu/rotate';

const CLOCKWISE90 = 90;
const COUNTERCLOCKWISE90 = -90;
const ROTATE180 = 180;

/**
 * Rotate ui class
 * @class
 * @ignore
 */
class Rotate extends Submenu {
    constructor(subMenuElement, {locale, iconStyle, menuBarPosition}) {
        super(subMenuElement, {
            locale,
            name: 'rotate',
            iconStyle,
            menuBarPosition,
            templateHtml
        });

        this._els = {
            rotateButton: this.selector('#tie-rotate-buttons')
        };
    }

    /**
     * Add event for rotate
     * @param {Object} actions - actions for crop
     *   @param {Function} actions.rotate - rotate action
     *   @param {Function} actions.setAngle - set angle action
     */
    addEvent(actions) {
        // {rotate, setAngle}
        this.actions = actions;
        this._els.rotateButton.addEventListener('click', this._changeRotateForButton.bind(this));
    }

    /**
     * Change rotate for button
     * @param {object} event - add button event object
     * @private
     */
    _changeRotateForButton(event) {
        const button = event.target.closest('.tui-image-editor-button');
        if (button) {
            const rotateType = this.getButtonType(button, [
                'counterclockwise90',
                'clockwise90',
                'rotate180'
            ]);
            const rotateAngle = {
                clockwise90: CLOCKWISE90,
                counterclockwise90: COUNTERCLOCKWISE90,
                rotate180: ROTATE180
            }[rotateType];
            this.actions.rotate(rotateAngle);
        }
    }
}

export default Rotate;

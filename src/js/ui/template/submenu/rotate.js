/**
 * @param {Locale} locale - Translate text
 * @param {Object} normal - iconStyle
 * @param {Object} active - iconStyle
 * @returns {string}
 */
export default ({locale, iconStyle: {normal, active}}) => (`
    <ul class="tui-image-editor-submenu-item">
        <li id="tie-rotate-buttons">
            <div class="tui-image-editor-button clockwise90">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-rotate-clockwise"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-rotate-clockwise"
                            class="active"/>
                    </svg>
                </div>
                <label> +90 </label>
            </div>
            <div class="tui-image-editor-button rotate180">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="/static/appschik/tui/img/icon-d.svg#icon-d-ic-rotate"
                            class="normal"/>
                        <use xlink:href="/static/appschik/tui/img/icon-d.svg#icon-d-ic-rotate"
                            class="active"/>
                    </svg>
                </div>
                <label> 180 </label>
            </div>
            <div class="tui-image-editor-button counterclockwise90">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-rotate-counterclockwise"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-rotate-counterclockwise"
                            class="active"/>
                    </svg>
                </div>
                <label> -90 </label>
                <!-- locale param use ${locale.localize('Range')} -->
            </div>
        </li>
    </ul>
`);

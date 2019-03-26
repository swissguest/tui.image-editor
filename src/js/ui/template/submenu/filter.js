/**
 * @param {Locale} locale - Translate text
 * @returns {string}
 */
export default ({locale}) => (`
    <ul class="tui-image-editor-submenu-item">
        <li class="tui-image-editor-submenu-align">
            <div class="tui-image-editor-checkbox-wrap fixed-width">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-grayscale">
                    <label for="tie-grayscale">${locale.localize('Grayscale')}</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-blur">
                    <label for="tie-blur">${locale.localize('Blur')}</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-sharpen2">
                    <label for="tie-sharpen2">${locale.localize('Sharpen S')}</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-sharpen">
                    <label for="tie-sharpen">${locale.localize('Sharpen M')}</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-sharpen3">
                    <label for="tie-sharpen3">${locale.localize('Sharpen L')}</label>
                </div>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li class="tui-image-editor-submenu-align">
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled" style="margin-bottom: 7px;">
                <div class="tui-image-editor-checkbox-wrap">
                    <div class="tui-image-editor-checkbox">
                        <input type="checkbox" id="tie-remove-white">
                        <label for="tie-remove-white">${locale.localize('Remove White')}</label>
                    </div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>${locale.localize('Threshold')}</label>
                    <div id="tie-removewhite-threshold-range"></div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>${locale.localize('Distance')}</label>
                    <div id="tie-removewhite-distance-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-newline tui-image-editor-checkbox-wrap">
                    <div class="tui-image-editor-checkbox">
                        <input type="checkbox" id="tie-gradient-transparency">
                        <label for="tie-gradient-transparency">${locale.localize('Gradient transparency')}</label>
                    </div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>${locale.localize('Value')}</label>
                    <div id="tie-gradient-transparency-range"></div>
                </div>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li class="tui-image-editor-submenu-align">
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-brightness">
                    <label for="tie-brightness">${locale.localize('Brightness')}</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-brightness-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-contrast">
                    <label for="tie-contrast">${locale.localize('Kontrast')}</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-contrast-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-saturate">
                    <label for="tie-saturate">${locale.localize('Sättigung')}</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-saturate-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-noise">
                    <label for="tie-noise">${locale.localize('Noise')}</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-noise-range"></div>
                </div>
            </div>
        </li>
    </ul>
`);

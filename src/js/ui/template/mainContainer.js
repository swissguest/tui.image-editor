export default ({
    locale,
    commonStyle,
    headerStyle,
    loadButtonStyle,
    downloadButtonStyle,
    uploadButtonStyle,
    submenuStyle,
    iconStyle: {normal, hover, disabled}
}) => (`
    <div class="tui-image-editor-main-container" style="${commonStyle}">
        <div class="tui-image-editor-header" style="${headerStyle}">
            <div class="tui-image-editor-header-buttons">
                <!-- div style="${loadButtonStyle}">
                    ${locale.localize('Load')}
                    <input type="file" class="tui-image-editor-load-btn" />
                </div -->
                <!-- button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                    ${locale.localize('Download')}
                </button>
                <button class="tui-image-editor-cancel-btn" >
                    ${locale.localize('Verlassen ohne Speichern')}
                </button>
                <button class="tui-image-editor-upload-and-stay-btn" style="${uploadButtonStyle}">
                    ${locale.localize('Sichern und weiter bearbeiten')}
                </button>
                <button class="tui-image-editor-upload-and-return-btn" style="${uploadButtonStyle}">
                    ${locale.localize('Sichern')}
                </button -->
                <div style="margin-left: 5px;">
                    <div class="tui-image-editor-cancel-btn" >
                        <svg class="svg_ic-submenu">
                            <use xlink:href="${normal.path}#${normal.name}-ic-undo" class="normal"/>
                            <use xlink:href="${hover.path}#${hover.name}-ic-undo" class="hover"/>
                        </svg>
                    </div>
                    <label style="white-space: nowrap">
                        ${locale.localize('ohne Speichern')}
                    </label>
                </div>
                <div style="margin-left: 5px;">
                    <div class="tui-image-editor-upload-and-stay-btn" >
                        <svg class="svg_ic-submenu">
                            <use xlink:href="${normal.path}#${normal.name}-ic-apply" class="normal"/>
                            <use xlink:href="${hover.path}#${hover.name}-ic-apply" class="hover"/>
                        </svg>
                    </div>
                    <label style="white-space: nowrap">
                        ${locale.localize('und weiter bearbeiten')}
                    </label>
                </div>
                <div style="margin-left: 5px;">
                    <div class="tui-image-editor-upload-and-return-btn" >
                        <svg class="svg_ic-submenu">
                            <use xlink:href="${disabled.path}#${disabled.name}-ic-apply" class="normal"/>
                            <use xlink:href="${hover.path}#${hover.name}-ic-apply" class="hover"/>
                        </svg>
                    </div>
                    <label style="white-space: nowrap">
                        ${locale.localize('und Schliessen')}
                    </label>
                </div>
            </div>
        </div>
        <div class="tui-image-editor-main">
            <div class="tui-image-editor-submenu">
                <div class="tui-image-editor-submenu-style" style="${submenuStyle}"></div>
            </div>
            <div class="tui-image-editor-wrap">
                <div class="tui-image-editor-size-wrap">
                    <div class="tui-image-editor-align-wrap">
                        <div class="tui-image-editor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);

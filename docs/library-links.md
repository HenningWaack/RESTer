# Libary links

As stated in the post [Improving Review Time by Providing Links to Third Party Sources](https://blog.mozilla.org/addons/2016/04/05/improved-review-time-with-links-to-sources/) it is useful for the addon reviewers to have links to the sources of third party libraries, which are used in the addon.

Update this file with all changes to used third party libraries (add/remove dependency, change version). Use the helper, which is automatically executed on every build:

    yarn build

```
@polymer/app-layout 3.0.2
https://unpkg.com/@polymer/app-layout@3.0.2/app-drawer-layout/app-drawer-layout.js
https://unpkg.com/@polymer/app-layout@3.0.2/app-drawer/app-drawer.js
https://unpkg.com/@polymer/app-layout@3.0.2/app-header-layout/app-header-layout.js
https://unpkg.com/@polymer/app-layout@3.0.2/app-header/app-header.js
https://unpkg.com/@polymer/app-layout@3.0.2/app-layout-behavior/app-layout-behavior.js
https://unpkg.com/@polymer/app-layout@3.0.2/app-scroll-effects/app-scroll-effects-behavior.js
https://unpkg.com/@polymer/app-layout@3.0.2/app-toolbar/app-toolbar.js
https://unpkg.com/@polymer/app-layout@3.0.2/helpers/helpers.js

@polymer/app-route 3.0.2
https://unpkg.com/@polymer/app-route@3.0.2/app-location.js
https://unpkg.com/@polymer/app-route@3.0.2/app-route-converter-behavior.js
https://unpkg.com/@polymer/app-route@3.0.2/app-route.js

@polymer/font-roboto-local 3.0.2
https://unpkg.com/@polymer/font-roboto-local@3.0.2/roboto.js

@polymer/iron-a11y-announcer 3.0.2
https://unpkg.com/@polymer/iron-a11y-announcer@3.0.2/iron-a11y-announcer.js

@polymer/iron-a11y-keys 3.0.1
https://unpkg.com/@polymer/iron-a11y-keys@3.0.1/iron-a11y-keys.js

@polymer/iron-a11y-keys-behavior 3.0.1
https://unpkg.com/@polymer/iron-a11y-keys-behavior@3.0.1/iron-a11y-keys-behavior.js

@polymer/iron-ajax 3.0.1
https://unpkg.com/@polymer/iron-ajax@3.0.1/iron-ajax.js
https://unpkg.com/@polymer/iron-ajax@3.0.1/iron-request.js

@polymer/iron-autogrow-textarea 3.0.1
https://unpkg.com/@polymer/iron-autogrow-textarea@3.0.1/iron-autogrow-textarea.js

@polymer/iron-behaviors 3.0.1
https://unpkg.com/@polymer/iron-behaviors@3.0.1/iron-button-state.js
https://unpkg.com/@polymer/iron-behaviors@3.0.1/iron-control-state.js

@polymer/iron-checked-element-behavior 3.0.1
https://unpkg.com/@polymer/iron-checked-element-behavior@3.0.1/iron-checked-element-behavior.js

@polymer/iron-collapse 3.0.1
https://unpkg.com/@polymer/iron-collapse@3.0.1/iron-collapse.js

@polymer/iron-dropdown 3.0.1
https://unpkg.com/@polymer/iron-dropdown@3.0.1/iron-dropdown.js

@polymer/iron-fit-behavior 3.0.1
https://unpkg.com/@polymer/iron-fit-behavior@3.0.1/iron-fit-behavior.js

@polymer/iron-flex-layout 3.0.1
https://unpkg.com/@polymer/iron-flex-layout@3.0.1/iron-flex-layout.js

@polymer/iron-form 3.0.1
https://unpkg.com/@polymer/iron-form@3.0.1/iron-form.js

@polymer/iron-form-element-behavior 3.0.1
https://unpkg.com/@polymer/iron-form-element-behavior@3.0.1/iron-form-element-behavior.js

@polymer/iron-icon 3.0.1
https://unpkg.com/@polymer/iron-icon@3.0.1/iron-icon.js

@polymer/iron-iconset-svg 3.0.1
https://unpkg.com/@polymer/iron-iconset-svg@3.0.1/iron-iconset-svg.js

@polymer/iron-input 3.0.1
https://unpkg.com/@polymer/iron-input@3.0.1/iron-input.js

@polymer/iron-location 3.0.1
https://unpkg.com/@polymer/iron-location@3.0.1/iron-location.js
https://unpkg.com/@polymer/iron-location@3.0.1/iron-query-params.js

@polymer/iron-media-query 3.0.1
https://unpkg.com/@polymer/iron-media-query@3.0.1/iron-media-query.js

@polymer/iron-menu-behavior 3.0.2
https://unpkg.com/@polymer/iron-menu-behavior@3.0.2/iron-menu-behavior.js
https://unpkg.com/@polymer/iron-menu-behavior@3.0.2/iron-menubar-behavior.js

@polymer/iron-meta 3.0.1
https://unpkg.com/@polymer/iron-meta@3.0.1/iron-meta.js

@polymer/iron-overlay-behavior 3.0.2
https://unpkg.com/@polymer/iron-overlay-behavior@3.0.2/iron-focusables-helper.js
https://unpkg.com/@polymer/iron-overlay-behavior@3.0.2/iron-overlay-backdrop.js
https://unpkg.com/@polymer/iron-overlay-behavior@3.0.2/iron-overlay-behavior.js
https://unpkg.com/@polymer/iron-overlay-behavior@3.0.2/iron-overlay-manager.js
https://unpkg.com/@polymer/iron-overlay-behavior@3.0.2/iron-scroll-manager.js

@polymer/iron-pages 3.0.1
https://unpkg.com/@polymer/iron-pages@3.0.1/iron-pages.js

@polymer/iron-range-behavior 3.0.1
https://unpkg.com/@polymer/iron-range-behavior@3.0.1/iron-range-behavior.js

@polymer/iron-resizable-behavior 3.0.1
https://unpkg.com/@polymer/iron-resizable-behavior@3.0.1/iron-resizable-behavior.js

@polymer/iron-scroll-target-behavior 3.0.1
https://unpkg.com/@polymer/iron-scroll-target-behavior@3.0.1/iron-scroll-target-behavior.js

@polymer/iron-selector 3.0.1
https://unpkg.com/@polymer/iron-selector@3.0.1/iron-multi-selectable.js
https://unpkg.com/@polymer/iron-selector@3.0.1/iron-selectable.js
https://unpkg.com/@polymer/iron-selector@3.0.1/iron-selection.js
https://unpkg.com/@polymer/iron-selector@3.0.1/iron-selector.js

@polymer/iron-validatable-behavior 3.0.1
https://unpkg.com/@polymer/iron-validatable-behavior@3.0.1/iron-validatable-behavior.js

@polymer/neon-animation 3.0.1
https://unpkg.com/@polymer/neon-animation@3.0.1/animations/fade-in-animation.js
https://unpkg.com/@polymer/neon-animation@3.0.1/animations/fade-out-animation.js
https://unpkg.com/@polymer/neon-animation@3.0.1/animations/scale-up-animation.js
https://unpkg.com/@polymer/neon-animation@3.0.1/neon-animatable-behavior.js
https://unpkg.com/@polymer/neon-animation@3.0.1/neon-animation-behavior.js
https://unpkg.com/@polymer/neon-animation@3.0.1/neon-animation-runner-behavior.js

@polymer/paper-badge 3.0.1
https://unpkg.com/@polymer/paper-badge@3.0.1/paper-badge.js

@polymer/paper-behaviors 3.0.1
https://unpkg.com/@polymer/paper-behaviors@3.0.1/paper-button-behavior.js
https://unpkg.com/@polymer/paper-behaviors@3.0.1/paper-checked-element-behavior.js
https://unpkg.com/@polymer/paper-behaviors@3.0.1/paper-inky-focus-behavior.js
https://unpkg.com/@polymer/paper-behaviors@3.0.1/paper-ripple-behavior.js

@polymer/paper-button 3.0.1
https://unpkg.com/@polymer/paper-button@3.0.1/paper-button.js

@polymer/paper-checkbox 3.1.0
https://unpkg.com/@polymer/paper-checkbox@3.1.0/paper-checkbox.js

@polymer/paper-dialog 3.0.1
https://unpkg.com/@polymer/paper-dialog@3.0.1/paper-dialog.js

@polymer/paper-dialog-behavior 3.0.1
https://unpkg.com/@polymer/paper-dialog-behavior@3.0.1/paper-dialog-behavior.js
https://unpkg.com/@polymer/paper-dialog-behavior@3.0.1/paper-dialog-shared-styles.js

@polymer/paper-dialog-scrollable 3.0.1
https://unpkg.com/@polymer/paper-dialog-scrollable@3.0.1/paper-dialog-scrollable.js

@polymer/paper-dropdown-menu 3.0.1
https://unpkg.com/@polymer/paper-dropdown-menu@3.0.1/paper-dropdown-menu-icons.js
https://unpkg.com/@polymer/paper-dropdown-menu@3.0.1/paper-dropdown-menu-shared-styles.js
https://unpkg.com/@polymer/paper-dropdown-menu@3.0.1/paper-dropdown-menu.js

@polymer/paper-fab 3.0.1
https://unpkg.com/@polymer/paper-fab@3.0.1/paper-fab.js

@polymer/paper-icon-button 3.0.2
https://unpkg.com/@polymer/paper-icon-button@3.0.2/paper-icon-button.js

@polymer/paper-input 3.0.2
https://unpkg.com/@polymer/paper-input@3.0.2/paper-input-addon-behavior.js
https://unpkg.com/@polymer/paper-input@3.0.2/paper-input-behavior.js
https://unpkg.com/@polymer/paper-input@3.0.2/paper-input-char-counter.js
https://unpkg.com/@polymer/paper-input@3.0.2/paper-input-container.js
https://unpkg.com/@polymer/paper-input@3.0.2/paper-input-error.js
https://unpkg.com/@polymer/paper-input@3.0.2/paper-input.js
https://unpkg.com/@polymer/paper-input@3.0.2/paper-textarea.js

@polymer/paper-item 3.0.1
https://unpkg.com/@polymer/paper-item@3.0.1/paper-icon-item.js
https://unpkg.com/@polymer/paper-item@3.0.1/paper-item-behavior.js
https://unpkg.com/@polymer/paper-item@3.0.1/paper-item-body.js
https://unpkg.com/@polymer/paper-item@3.0.1/paper-item-shared-styles.js
https://unpkg.com/@polymer/paper-item@3.0.1/paper-item.js

@polymer/paper-listbox 3.0.1
https://unpkg.com/@polymer/paper-listbox@3.0.1/paper-listbox.js

@polymer/paper-menu-button 3.0.1
https://unpkg.com/@polymer/paper-menu-button@3.0.1/paper-menu-button-animations.js
https://unpkg.com/@polymer/paper-menu-button@3.0.1/paper-menu-button.js

@polymer/paper-progress 3.0.1
https://unpkg.com/@polymer/paper-progress@3.0.1/paper-progress.js

@polymer/paper-radio-button 3.0.1
https://unpkg.com/@polymer/paper-radio-button@3.0.1/paper-radio-button.js

@polymer/paper-radio-group 3.0.1
https://unpkg.com/@polymer/paper-radio-group@3.0.1/paper-radio-group.js

@polymer/paper-ripple 3.0.1
https://unpkg.com/@polymer/paper-ripple@3.0.1/paper-ripple.js

@polymer/paper-slider 3.0.1
https://unpkg.com/@polymer/paper-slider@3.0.1/paper-slider.js

@polymer/paper-spinner 3.0.2
https://unpkg.com/@polymer/paper-spinner@3.0.2/paper-spinner-behavior.js
https://unpkg.com/@polymer/paper-spinner@3.0.2/paper-spinner-styles.js
https://unpkg.com/@polymer/paper-spinner@3.0.2/paper-spinner.js

@polymer/paper-styles 3.0.1
https://unpkg.com/@polymer/paper-styles@3.0.1/color.js
https://unpkg.com/@polymer/paper-styles@3.0.1/default-theme.js
https://unpkg.com/@polymer/paper-styles@3.0.1/element-styles/paper-material-styles.js
https://unpkg.com/@polymer/paper-styles@3.0.1/paper-styles.js
https://unpkg.com/@polymer/paper-styles@3.0.1/shadow.js
https://unpkg.com/@polymer/paper-styles@3.0.1/typography.js

@polymer/paper-tabs 3.1.0
https://unpkg.com/@polymer/paper-tabs@3.1.0/paper-tab.js
https://unpkg.com/@polymer/paper-tabs@3.1.0/paper-tabs-icons.js
https://unpkg.com/@polymer/paper-tabs@3.1.0/paper-tabs.js

@polymer/paper-toggle-button 3.0.1
https://unpkg.com/@polymer/paper-toggle-button@3.0.1/paper-toggle-button.js

@polymer/paper-tooltip 3.0.1
https://unpkg.com/@polymer/paper-tooltip@3.0.1/paper-tooltip.js

@polymer/polymer 3.2.0
https://unpkg.com/@polymer/polymer@3.2.0/lib/elements/array-selector.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/elements/custom-style.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/elements/dom-bind.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/elements/dom-if.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/elements/dom-module.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/elements/dom-repeat.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/legacy/class.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/legacy/legacy-element-mixin.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/legacy/mutable-data-behavior.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/legacy/polymer-fn.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/legacy/polymer.dom.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/legacy/templatizer-behavior.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/dir-mixin.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/element-mixin.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/gesture-event-listeners.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/mutable-data.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/properties-changed.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/properties-mixin.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/property-accessors.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/property-effects.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/mixins/template-stamp.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/array-splice.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/async.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/boot.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/case-map.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/debounce.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/flattened-nodes-observer.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/flush.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/gestures.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/html-tag.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/mixin.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/path.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/render-status.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/resolve-url.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/settings.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/style-gather.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/telemetry.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/templatize.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/unresolved.js
https://unpkg.com/@polymer/polymer@3.2.0/lib/utils/wrap.js
https://unpkg.com/@polymer/polymer@3.2.0/polymer-element.js
https://unpkg.com/@polymer/polymer@3.2.0/polymer-legacy.js

@webcomponents/shadycss 1.9.1
https://unpkg.com/@webcomponents/shadycss@1.9.1/entrypoints/apply-shim.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/entrypoints/custom-style-interface.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/apply-shim-utils.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/apply-shim.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/common-regex.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/common-utils.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/css-parse.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/custom-style-interface.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/document-wait.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/style-settings.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/style-util.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/template-map.js
https://unpkg.com/@webcomponents/shadycss@1.9.1/src/unscoped-style-handler.js

@webcomponents/webcomponentsjs 2.2.10
https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/bundles/webcomponents-ce.js
https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/bundles/webcomponents-sd-ce-pf.js
https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/bundles/webcomponents-sd-ce.js
https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/bundles/webcomponents-sd.js
https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-bundle.js
https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-loader.js

ace-builds 1.4.4
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/ace.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/ext-searchbox.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/mode-html.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/mode-json.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/mode-text.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/mode-xml.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/theme-chrome.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/theme-twilight.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/worker-html.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/worker-json.js
https://unpkg.com/ace-builds@1.4.4/src-min-noconflict/worker-xml.js

dompurify 1.0.10
https://unpkg.com/dompurify@1.0.10/dist/purify.es.js

frigus02-vkbeautify 1.0.1
https://unpkg.com/frigus02-vkbeautify@1.0.1/vkbeautify.js

lodash 4.17.11
https://unpkg.com/lodash@4.17.11/lodash.js

mousetrap 1.6.3
https://unpkg.com/mousetrap@1.6.3/mousetrap.js

string_score 0.1.22
https://unpkg.com/string_score@0.1.22/string_score.js

web-animations-js 2.3.1
https://unpkg.com/web-animations-js@2.3.1/web-animations-next-lite.min.js

webpack 4.33.0
https://unpkg.com/webpack@4.33.0/buildin/amd-define.js
https://unpkg.com/webpack@4.33.0/buildin/global.js
https://unpkg.com/webpack@4.33.0/buildin/module.js
```

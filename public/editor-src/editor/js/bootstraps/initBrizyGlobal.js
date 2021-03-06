import Config from "visual/global/Config";
import { addFilter, applyFilter } from "visual/utils/filters";
import { t } from "visual/utils/i18n";
import { setIds } from "visual/utils/models";
import {
  getOptionColorHexByPalette,
  getAnimations,
  getDynamicContentChoices,
  getDynamicContentByPlaceholder,
  getShapes
} from "visual/utils/options";
import {
  hexToRgba,
  getColorPaletteColors,
  getColorPaletteColor,
  makeRichTextColorPaletteCSS
} from "visual/utils/color";
import {
  getFontById,
  getUsedFonts,
  getUsedFontsDetails,
  getFontStyles,
  getFontStyle,
  weightTypes,
  getWeight,
  getWeightChoices,
  makeSubsetGoogleFontsUrl,
  makeRichTextFontGoogleCSS,
  makeRichTextFontUploadCSS,
  makeRichTextFontStylesCSS
} from "visual/utils/fonts";
import {
  defaultValueValue,
  defaultValueKey,
  tabletSyncOnChange,
  mobileSyncOnChange,
  onChangeTypography,
  onChangeTypographyMobile
} from "visual/utils/onChange";
import {
  toolbarColor2,
  toolbarColorHexField2,
  toolbarFilterHue,
  toolbarFilterSaturation,
  toolbarFilterBrightness,
  toolbarFilterContrast,
  toolbarCustomCSS,
  toolbarLinkPopup,
  toolbarLinkUpload,
  toolbarActionClosePopup
} from "visual/utils/toolbar";
import { NORMAL, HOVER } from "visual/utils/stateMode";

global.Brizy = {
  config: Config,
  addFilter,
  applyFilter,
  t,
  utils: {
    setIds,

    getAnimations,
    getDynamicContentChoices,
    getDynamicContentByPlaceholder,
    getShapes,

    getOptionColorHexByPalette,
    hexToRgba,
    getColorPaletteColors,
    getColorPaletteColor,
    makeRichTextColorPaletteCSS,

    getFontById,
    getUsedFonts,
    getUsedFontsDetails,
    getFontStyles,
    getFontStyle,
    weightTypes,
    getWeight,
    getWeightChoices,
    makeSubsetGoogleFontsUrl,
    makeRichTextFontGoogleCSS,
    makeRichTextFontUploadCSS,
    makeRichTextFontStylesCSS,

    defaultValueValue,
    defaultValueKey,
    tabletSyncOnChange,
    mobileSyncOnChange,
    onChangeTypography,
    onChangeTypographyMobile,
    NORMAL,
    HOVER
  },
  toolbar: {
    toolbarColor2,
    toolbarColorHexField2,
    toolbarFilterHue,
    toolbarFilterSaturation,
    toolbarFilterBrightness,
    toolbarFilterContrast,
    toolbarCustomCSS,
    toolbarLinkPopup,
    toolbarLinkUpload,
    toolbarActionClosePopup
  }
};

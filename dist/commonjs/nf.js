'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _i18n = require('./i18n');

var NfValueConverter = (function () {
  NfValueConverter.inject = function inject() {
    return [_i18n.I18N];
  };

  function NfValueConverter(i18n) {
    _classCallCheck(this, NfValueConverter);

    this.service = i18n;
  }

  NfValueConverter.prototype.toView = function toView(value, formatOptions, locale, numberFormat) {
    var nf = numberFormat || this.service.nf(formatOptions, locale || this.service.getLocale());

    return nf.format(value);
  };

  return NfValueConverter;
})();

exports.NfValueConverter = NfValueConverter;
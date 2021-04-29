// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tostring
description: RangeError thrown when fractionalSecondDigits option out of range
info: |
    sec-getstringornumberoption step 3.a:
      a. If _value_ < _minimum_ or _value_ > _maximum_, throw a *RangeError* exception.
    sec-temporal-tosecondsstringprecision step 9:
      9. Let _digits_ be ? GetStringOrNumberOption(_normalizedOptions_, *"fractionalSecondDigits"*, « *"auto"* », 0, 9, *"auto"*).
    sec-temporal.instant.prototype.tostring step 6:
      6. Let _precision_ be ? ToDurationSecondsStringPrecision(_options_).
---*/

const instant = new Temporal.Instant(1_000_000_000_987_650_000n);

assert.throws(RangeError, () => instant.toString({ fractionalSecondDigits: -1 }));
assert.throws(RangeError, () => instant.toString({ fractionalSecondDigits: 10 }));

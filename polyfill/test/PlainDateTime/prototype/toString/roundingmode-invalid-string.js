// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.tostring
description: RangeError thrown when roundingMode option not one of the allowed string values
---*/

const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 123, 987, 500);
assert.throws(RangeError, () => datetime.toString({ smallestUnit: "microsecond", roundingMode: "other string" }));

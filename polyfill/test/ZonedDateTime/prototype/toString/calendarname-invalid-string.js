// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.protoype.tostring
description: RangeError thrown when calendarName option not one of the allowed string values
info: |
    sec-getoption step 10:
      10. If _values_ is not *undefined* and _values_ does not contain an element equal to _value_, throw a *RangeError* exception.
    sec-temporal-toshowcalendaroption step 1:
      1. Return ? GetOption(_normalizedOptions_, *"calendarName"*, « String », « *"auto"*, *"always"*, *"never"* », *"auto"*).
    sec-temporal.zoneddatetime.protoype.tostring step 6:
      6. Let _showCalendar_ be ? ToShowCalendarOption(_options_).
---*/

const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_64_321n, "UTC");
assert.throws(RangeError, () => datetime.toString({ calendarName: "other string" }));

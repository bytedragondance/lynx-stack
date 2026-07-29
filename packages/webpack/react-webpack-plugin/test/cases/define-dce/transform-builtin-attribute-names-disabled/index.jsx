// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import fs from 'node:fs/promises';

import '@lynx-js/react';

it('reduces the disabled builtin attribute-name transform to an identity function', async () => {
  const content = await fs.readFile(__filename, 'utf-8');

  expect(content).toMatch(
    /function transformAttrName\(name\)\s*\{\s*return name;?\s*\}/,
  );
});

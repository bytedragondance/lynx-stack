// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useSignal } from '@preact/signals';

import { root, useEffect } from '@lynx-js/react';

import { LoopUpdateBenchmark } from '../../src/UpdateBenchmarks.js';

function App() {
  const updated = useSignal(false);

  useEffect(() => {
    updated.value = true;
  }, [updated]);

  return <LoopUpdateBenchmark updated={updated.value} />;
}

runAfterLoadScript(() => {
  root.render(<App />);
});

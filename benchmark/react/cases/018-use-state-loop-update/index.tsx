// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useEffect, useState } from '@lynx-js/react';

import { LoopUpdateBenchmark } from '../../src/UpdateBenchmarks.js';

function App() {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setUpdated(true);
  }, [setUpdated]);

  return <LoopUpdateBenchmark updated={updated} />;
}

runAfterLoadScript(() => {
  root.render(<App />);
});

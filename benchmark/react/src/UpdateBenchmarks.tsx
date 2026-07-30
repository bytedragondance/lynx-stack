// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const ITEM_IDS = Array.from({ length: 100 }, (_, index) => index);
const UPDATED_ITEM_IDS = Array.from({ length: 100 }, (_, index) => index + 50);

interface UpdateBenchmarkProps {
  updated: boolean;
}

export function AttributeUpdateBenchmark({
  updated,
}: UpdateBenchmarkProps) {
  return (
    <view id={`stop-benchmark-${updated}`}>
      {ITEM_IDS.map(itemId => (
        <view
          key={itemId}
          id={`${updated ? 'updated' : 'initial'}-${itemId}`}
        />
      ))}
    </view>
  );
}

export function ConditionalUpdateBenchmark({
  updated,
}: UpdateBenchmarkProps) {
  const children = updated
    ? ITEM_IDS.map(itemId => (
      <view key={itemId}>
        <text>{`Detail ${itemId}`}</text>
        <text>{`Value ${itemId}`}</text>
      </view>
    ))
    : ITEM_IDS.map(itemId => <text key={itemId}>{`Summary ${itemId}`}</text>);

  return (
    <view id={`stop-benchmark-${updated}`}>
      {children}
    </view>
  );
}

export function LoopUpdateBenchmark({
  updated,
}: UpdateBenchmarkProps) {
  const itemIds = updated ? UPDATED_ITEM_IDS : ITEM_IDS;

  return (
    <view id={`stop-benchmark-${updated}`}>
      {itemIds.map(itemId => <text key={itemId}>{`Item ${itemId}`}</text>)}
    </view>
  );
}

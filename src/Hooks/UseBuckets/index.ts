import { useState } from "react";
import { IBuckets } from "../../Data/IBuckets";
import { IBucketSteps } from "../../Data/IBucketSteps";
import { getGcd } from "../../Utils/GetGcd";

const initBuckets: IBuckets = {
  bucketX: 0,
  bucketY: 0,
  targetBucket: 0,
};

interface IUseBuckets {
  buckets: IBuckets;
  setBuckets: (buckets: IBuckets) => void;
  bucketSteps: IBucketSteps[];
  error: string;
  handleBuckets: () => void;
  handleReset: () => void;
}
const useBuckets = (): IUseBuckets => {
  const [buckets, setBuckets] = useState(initBuckets);
  const [bucketSteps, setBucketSteps] = useState<IBucketSteps[]>([]);
  const [error, setError] = useState("");
  const handleReset = () => {
    setBuckets({ ...initBuckets });
    setError("");
    setBucketSteps([]);
  };
  const handleBuckets = () => {
    if (buckets.bucketX < 0 || buckets.bucketY < 0) {
      setBucketSteps([]);
      return setError("Numbers must not be negative");
    }
    if (buckets.targetBucket % getGcd(buckets.bucketX, buckets.bucketY) !== 0) {
      setBucketSteps([]);
      return setError("No Solution");
    }
    if (
      buckets.bucketX < buckets.targetBucket &&
      buckets.bucketY < buckets.targetBucket
    ) {
      setBucketSteps([]);
      return setError(
        "Bucket X and Bucket Y are larger than the Target Bucket"
      );
    }

    const queue: [number, number, string[]][] = [[0, 0, []]];
    const bucketStates = new Set();

    while (queue?.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [bucketX, bucketY, steps]:any = queue.shift();
      const currentState = `${bucketX}-${bucketY}`;

      if (bucketStates.has(currentState)) {
        continue;
      }

      bucketStates.add(currentState);

      if (
        bucketX === buckets.targetBucket ||
        bucketY === buckets.targetBucket
      ) {
        setError("");
        setBucketSteps(steps);
        return;
      }

      queue.push([
        buckets.bucketX,
        bucketY,
        [
          ...steps,
          { action: "Fill Bucket X", buckets: [buckets.bucketX, bucketY] },
        ],
      ]);

      queue.push([
        bucketX,
        buckets.bucketY,
        [
          ...steps,
          { action: "Fill Bucket Y", buckets: [bucketX, buckets.bucketY] },
        ],
      ]);

      queue.push([
        0,
        bucketY,
        [...steps, { action: "Empty Bucket X", buckets: [0, bucketY] }],
      ]);

      queue.push([
        bucketX,
        0,
        [...steps, { action: "Empty Bucket Y", buckets: [bucketX, 0] }],
      ]);

      queue.push([
        Math.min(bucketX + bucketY, buckets.bucketX),
        Math.max(0, bucketX + bucketY - buckets.bucketX),
        [
          ...steps,
          {
            action: "Transfer from Bucket Y to Bucket X",
            buckets: [
              Math.min(bucketX + bucketY, buckets.bucketX),
              Math.max(0, bucketX + bucketY - buckets.bucketX),
            ],
          },
        ],
      ]);

      queue.push([
        Math.max(0, bucketX + bucketY - buckets.bucketY),
        Math.min(bucketX + bucketY, buckets.bucketY),
        [
          ...steps,
          {
            action: "Transfer from Bucket X to Bucket Y",
            buckets: [
              Math.max(0, bucketX + bucketY - buckets.bucketY),
              Math.min(bucketX + bucketY, buckets.bucketY),
            ],
          },
        ],
      ]);
    }
  };
  return {
    buckets,
    setBuckets,
    bucketSteps,
    error,
    handleBuckets,
    handleReset,
  };
};

export { useBuckets };

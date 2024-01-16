import Home from "..";
import { render, screen } from "../../../test-utils";

describe("<Home />", () => {
  test("Submits form and show table", async () => {
    vi.mock("../../../Hooks/UseBuckets", () => ({
      useBuckets: vi.fn(() => ({
        buckets: { bucketX: 12, bucketY: 60, targetBucket: 48 },
        setBuckets: vi.fn(),
        handleBuckets: vi.fn(),
        handleReset: vi.fn(),
        error: "",
        bucketSteps: [
          {
            action: "Fill Bucket Y",
            buckets: [0, 60],
          },
          {
            action: "Transfer from Bucket Y to Bucket X",
            buckets: [12, 48],
          },
        ],
      })),
    }));
    render(<Home />);

    expect(screen.queryByTestId("buckets-table")).toBeInTheDocument();
  });
});

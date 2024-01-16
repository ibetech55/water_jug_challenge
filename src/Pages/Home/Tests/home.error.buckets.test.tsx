import { render, screen } from "../../../test-utils";
import Home from "..";

const errorText = "Bucket X and Bucket Y are larger than the Target Bucket";
describe("<Home />", () => {
  test("Target bucket should not be larger than Bucket X and Y", async () => {
    vi.mock("../../../Hooks/UseBuckets", () => ({
      useBuckets: vi.fn(() => ({
        buckets: { bucketX: 20, bucketY: 40, targetBucket: 80 },
        setBuckets: vi.fn(),
        handleBuckets: vi.fn(),
        handleReset: vi.fn(),
        error: errorText,
        bucketSteps: [],
      })),
    }));
    render(<Home />);

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });
});

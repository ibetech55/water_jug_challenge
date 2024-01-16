import { render, screen } from "../../../test-utils";
import Home from "..";

const errorText = "No Solution";

describe("<Home />", () => {
  test("Should submit form with no solution and show error", async () => {
    vi.mock("../../../Hooks/UseBuckets", () => ({
      useBuckets: vi.fn(() => ({
        buckets: { bucketX: 2, bucketY: 6, targetBucket: 5 },
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

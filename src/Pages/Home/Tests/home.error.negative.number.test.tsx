import { render, screen, userEvent } from "../../../test-utils";
import Home from "..";

const errorText = "Numbers must not be negative";

describe("<Home />", () => {
  test("Should not submit form with negative numbers and show error", async () => {
    vi.mock("../../../Hooks/UseBuckets", () => ({
      useBuckets: vi.fn(() => ({
        buckets: { bucketX: -2, bucketY: -10, targetBucket: -8 },
        setBuckets: vi.fn(),
        handleBuckets: vi.fn(),
        handleReset: vi.fn(),
        error: errorText,
        bucketSteps: [],
      })),
    }));
    render(<Home />);
    userEvent.type(screen.getByLabelText("Bucket X"), "-2");
    userEvent.type(screen.getByLabelText("Bucket Y"), "-10");
    userEvent.type(screen.getByLabelText("Target Bucket"), "-8");

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });
});

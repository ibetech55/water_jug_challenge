import Home from "..";
import { render, screen } from "../../../test-utils";

describe("<Home />", () => {
  test("renders Home component", async () => {
    vi.mock("../../../Hooks/UseBuckets", () => ({
      useBuckets: vi.fn(() => ({
        buckets: { bucketX: 0, bucketY: 0, targetBucket: 0 },
        setBuckets: vi.fn(),
        handleBuckets: vi.fn(),
        handleReset: vi.fn(),
        error: "",
        bucketSteps: [],
      })),
    }));
    render(<Home />);

    expect(screen.getByText("Water Jug Challenge")).toBeInTheDocument();
    expect(screen.getByTestId("buckets-form")).toBeInTheDocument();
    expect(screen.queryByTestId("buckets-table")).not.toBeInTheDocument();
    expect(screen.queryByTestId("error")).not.toBeInTheDocument();
  });
});

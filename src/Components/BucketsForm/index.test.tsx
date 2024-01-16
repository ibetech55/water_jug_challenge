import { IBuckets } from "../../Data/IBuckets";
import BucketsForm from ".";
import { render, userEvent, screen, fireEvent } from "../../test-utils";

describe("BucketsForm", () => {
  const mockBuckets: IBuckets = {
    bucketX: 3,
    bucketY: 18,
    targetBucket: 12,
  };

  test("renders BucketsForm component", () => {
    const mockSetBuckets = vi.fn();
    const mockHandleBuckets = vi.fn();
    const mockHandleReset = vi.fn();

    render(
      <BucketsForm
        buckets={mockBuckets}
        setBuckets={mockSetBuckets}
        handleBuckets={mockHandleBuckets}
        handleReset={mockHandleReset}
      />
    );

    expect(screen.getByLabelText("Bucket X")).toBeInTheDocument();
    expect(screen.getByLabelText("Bucket Y")).toBeInTheDocument();
    expect(screen.getByLabelText("Target Bucket")).toBeInTheDocument();

    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("handles form input changes", () => {
    const mockSetBuckets = vi.fn();
    const mockHandleBuckets = vi.fn();
    const mockHandleReset = vi.fn();

    render(
      <BucketsForm
        buckets={mockBuckets}
        setBuckets={mockSetBuckets}
        handleBuckets={mockHandleBuckets}
        handleReset={mockHandleReset}
      />
    );

    fireEvent.change(screen.getByLabelText("Bucket X"), {
      target: { value: 3 },
    });

    fireEvent.change(screen.getByLabelText("Bucket Y"), {
      target: { value: 18 },
    });

    fireEvent.change(screen.getByLabelText("Target Bucket"), {
      target: { value: 12 },
    });

    expect(mockSetBuckets).toHaveBeenCalledWith({ ...mockBuckets, bucketX: 3 });
    expect(mockSetBuckets).toHaveBeenCalledWith({
      ...mockBuckets,
      bucketY: 18,
    });
    expect(mockSetBuckets).toHaveBeenCalledWith({
      ...mockBuckets,
      targetBucket: 12,
    });
  });

  test("Reset inputs on reset button click", async () => {
    const mockBuckets = {
      bucketX: 12,
      bucketY: 48,
      targetBucket: 24,
    };

    const mockSetBuckets = vi.fn();
    const mockHandleBuckets = vi.fn();
    const mockHandleReset = vi.fn();
    const user = userEvent.setup();

    render(
      <BucketsForm
        buckets={mockBuckets}
        setBuckets={mockSetBuckets}
        handleBuckets={mockHandleBuckets}
        handleReset={mockHandleReset}
      />
    );

    await user.click(screen.getByRole("button", { name: /reset/i }));

    expect(mockHandleReset).toHaveBeenCalled();
    const bucketXInput = screen.getByLabelText("Bucket X") as HTMLInputElement;
    const bucketYInput = screen.getByLabelText("Bucket Y") as HTMLInputElement;
    const targetInput = screen.getByLabelText(
      "Target Bucket"
    ) as HTMLInputElement;

    expect(bucketXInput.value).toBe("");
    expect(bucketYInput.value).toBe("");
    expect(targetInput.value).toBe("");
  });

  test("Submit click", async () => {
    const mockBuckets = {
      bucketX: 12,
      bucketY: 60,
      targetBucket: 48,
    };

    const mockSetBuckets = vi.fn();
    const mockHandleBuckets = vi.fn();
    const mockHandleReset = vi.fn();
    const user = userEvent.setup();

    render(
      <BucketsForm
        buckets={mockBuckets}
        setBuckets={mockSetBuckets}
        handleBuckets={mockHandleBuckets}
        handleReset={mockHandleReset}
      />
    );

    const bucketXInput = screen.getByLabelText("Bucket X") as HTMLInputElement;
    const bucketYInput = screen.getByLabelText("Bucket Y") as HTMLInputElement;
    const targetInput = screen.getByLabelText(
      "Target Bucket"
    ) as HTMLInputElement;

    fireEvent.change(bucketXInput, {
      target: { value: 12 },
    });

    fireEvent.change(bucketYInput, {
      target: { value: 60 },
    });

    fireEvent.change(targetInput, {
      target: { value: 48 },
    });

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockSetBuckets).toHaveBeenCalledWith({
      bucketX: 12,
      bucketY: 60,
      targetBucket: 48,
    });
  });
});

import { render } from "../../test-utils";
import BucketsTable from "."; // Adjust the path accordingly
import { IBucketSteps } from "../../Data/IBucketSteps";
import { IBuckets } from "../../Data/IBuckets";

const mockData: IBucketSteps[] = [
  {
    action: "Fill Bucket Y",
    buckets: [0, 60],
  },
  {
    action: "Transfer from Bucket Y to Bucket X",
    buckets: [12, 48],
  },
];

const mockBuckets: IBuckets = {
  bucketX: 12,
  bucketY: 60,
  targetBucket: 48,
};

describe("<BucketsTable />", () => {
  test("renders BucketsTable component", () => {
    const { getByText } = render(
      <BucketsTable data={mockData} buckets={mockBuckets} />
    );

    expect(getByText("Action")).toBeInTheDocument();
    expect(getByText("Bucket X Amount")).toBeInTheDocument();
    expect(getByText("Bucket Y Amount")).toBeInTheDocument();

    expect(getByText("0 (Empty)")).toBeInTheDocument();
    expect(getByText("60 (Full)")).toBeInTheDocument();
    expect(getByText("12 (Full)")).toBeInTheDocument();
    expect(getByText("48 (Solved)")).toBeInTheDocument();
  });
});


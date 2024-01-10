import { Button, Card, Form, Input } from "antd";
import React from "react";
import { IBuckets } from "../../Data/IBuckets";
import "./index.css";

interface IProps {
  buckets: IBuckets;
  setBuckets: (buckets: IBuckets) => void;
  handleBuckets: () => void;
  handleReset: () => void;
}

const BucketsForm:React.FC<IProps> = ({
  buckets,
  setBuckets,
  handleBuckets,
  handleReset,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuckets({ ...buckets, [e.target.name]: Number(e.target.value) });
  };
  return (
    <Card className="buckets-form">
      <Form
        onFinish={() => handleBuckets()}
        onReset={handleReset}
        layout="inline"
      >
        <Form.Item label="Bucket X" name="bucketX">
          <Input
            type="number"
            value={buckets.bucketX}
            name="bucketX"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Bucket Y" name="bucketY">
          <Input
            type="number"
            value={buckets.bucketY}
            name="bucketY"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Target Bucket" name="targetBucket">
          <Input
            type="number"
            value={buckets.targetBucket}
            name="targetBucket"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            type="primary"
            htmlType="reset"
            onClick={handleReset}
            className="buckets-form__button-reset"
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BucketsForm;

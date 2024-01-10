/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { IBucketSteps } from "../../Data/IBucketSteps";
import { IBuckets } from "../../Data/IBuckets";

interface IProps {
  data: IBucketSteps[];
  buckets: IBuckets;
}

interface DataType {
  key: React.Key;
  action: string;
  bucketX: string;
  bucketY: string;
}

const BucketText = ({ value }: { value: string }) => {
  return (
    <Typography
      style={{ fontWeight: value.includes("(Solved)") ? "bold" : "" }}
    >
      {value}
    </Typography>
  );
};

const BucketsTable: React.FC<IProps> = ({ data, buckets }) => {
  const [tableData, setTableData] = useState<DataType[]>([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 140,
    },
    {
      title: "Bucket X Amount",
      dataIndex: "bucketX",
      key: "bucketX",
      width: 140,
      render: (value: string) => <BucketText value={value} />,
    },
    {
      title: "Bucket Y Amount",
      dataIndex: "bucketY",
      key: "bucketY",
      width: 140,
      render: (value: string) => <BucketText value={value} />,
    },
  ];

  const handleBucketsText = (
    bucketCurrentValue: number,
    bucketOriginValue: number
  ) => {
    if (bucketCurrentValue === buckets.targetBucket) {
      return `${bucketCurrentValue} (Solved)`;
    } else if (bucketCurrentValue === 0) {
      return `${bucketCurrentValue} (Empty)`;
    } else if (bucketCurrentValue < bucketOriginValue) {
      return `${bucketCurrentValue} (Partially Full)`;
    } else {
      return `${bucketCurrentValue} (Full)`;
    }
  };

  useEffect(() => {
    const dataArr: DataType[] = data.map(
      (info: IBucketSteps, index: number) => ({
        key: index,
        action: info.action,
        bucketX: handleBucketsText(info.buckets[0], buckets.bucketX),
        bucketY: handleBucketsText(info.buckets[1], buckets.bucketY),
      })
    );
    setTableData(dataArr);
  }, [data]);

  return (
    <Card>
      <Table
        dataSource={tableData}
        columns={columns}
        scroll={{ x: 1000 }}
        size="middle"
        pagination={false}
      />
    </Card>
  );
};

export default BucketsTable;

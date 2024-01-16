import { Col, Row, Typography } from "antd";
import BucketsForm from "../../Components/BucketsForm";
import BucketsTable from "../../Components/BucketsTable";
import { useBuckets } from "../../Hooks/UseBuckets";
import "./index.css";

const Home: React.FC = () => {
  const {
    buckets,
    setBuckets,
    handleBuckets,
    handleReset,
    error,
    bucketSteps,
  } = useBuckets();
  return (
    <div className="home">
      <Typography.Title className="home__title">
        Water Jug Challenge
      </Typography.Title>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BucketsForm
            buckets={buckets}
            setBuckets={setBuckets}
            handleBuckets={handleBuckets}
            handleReset={handleReset}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {error && bucketSteps.length === 0 && (
            <Typography className="home__error" data-testid="error">{error}</Typography>
          )} 
          {!error && bucketSteps.length > 0 && (
            <BucketsTable data={bucketSteps} buckets={buckets} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Home;

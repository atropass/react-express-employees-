import { Button, Result, Row } from "antd";
import { Link, useParams } from "react-router-dom";

const Statuses: Record<string, string> = {
  created: "User successfully created",
  updated: "User successfully updated",
  deleted: "User successfully removed",
};

export const Status = () => {
  const { status } = useParams();

  return (
    <Row align="middle" justify="center" style={{ width: "100%" }}>
      <Result
        status={ status ? 'success' : 404 }
        title={status ? Statuses[status] : 'Not Found'}
        extra={
          <Button key="dashboard">
            <Link to="/">Main Page</Link>
          </Button>
        }
      />
    </Row>
  );
};

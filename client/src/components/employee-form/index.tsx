import { Employee } from "@prisma/client";
import { Form, Card, Space } from "antd";
import { CustomButton } from "../custom-button";
import { CustomInput } from "../custom-input";
import { ErrorMessage } from "../error-message";

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

export const EmployeeForm = ({
  onFinish,
  title,
  employee,
  btnText,
  error,
}: Props<Employee>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="add-employee" onFinish={onFinish} initialValues={employee}>
        <CustomInput type="text" name="firstName" placeholder="Name" />
        <CustomInput name="lastName" placeholder="Last Name" />
        <CustomInput type="number" name="age" placeholder="Age" />
        <CustomInput name="address" placeholder="Address" />
        <Space direction="vertical" size="large">
          <ErrorMessage message={ error } />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};

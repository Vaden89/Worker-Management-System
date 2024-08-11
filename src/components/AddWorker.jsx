import React, { useState, useEffect } from "react";
import { Button, Form, Input, Space } from "antd";
import { WorkerService } from "../services/worker.service";
import { success, error } from "./Modals";

export const AddWorker = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    const formData = await form.validateFields();
    try {
      setLoading(true);
      const response = await WorkerService.CreateWorker(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        size="large"
        form={form}
        name="add-worker"
        onFinish={onFinish}
        layout="vertical"
        style={{
          maxWidth: 600,
        }}
      >
        <h3>Add a new worker</h3>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please enter first name",
            },
          ]}
        >
          <Input placeholder="John" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please enter last name",
            },
          ]}
        >
          <Input placeholder="Doe" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            {
              required: true,
              message: "Please enter email address",
            },
          ]}
        >
          <Input placeholder="johndoe@example.com" type="email" />
        </Form.Item>
        <Form.Item
          name="street"
          label="Street"
          rules={[
            {
              required: true,
              message: "Please enter street name",
            },
          ]}
        >
          <Input placeholder="Wall street" />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Please enter location",
            },
          ]}
        >
          <Input placeholder="New York" />
        </Form.Item>
        <Form.Item
          name="iban"
          label="IBAN"
          rules={[
            {
              required: true,
              message: "Please enter IBAN",
            },
          ]}
        >
          <Input placeholder="XXXX-XXXX-XXXX" minLength={12} maxLength={12} />
        </Form.Item>
        <Form.Item>
          <Space direction="vertical">
            <Button
              loading={loading}
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Create Worker
            </Button>
            <Button
              style={{ width: "100%" }}
              htmlType="button"
              onClick={onReset}
              disabled={loading}
            >
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

import { Modal, Form, Input } from "antd";
import { WorkerService } from "../services/worker.service";
import { useState } from "react";

/**
 * Displays a modal with a success message.
 *
 * @param {string} title - The title of the modal.
 * @param {string|React.ReactNode} content - The content to display in the modal. Can be a simple string or a React component.
 * @param {Function} [handleOk=() => null] - The function to execute when the OK button is clicked. Defaults to simply dismissing the modal if not provided.
 * @example
 * success('Success', 'The operation was successful.', () => console.log('Modal closed'));
 *
 * @example
 * // With JSX content and no special onOk behavior:
 * success('Profile Update', <div>Your profile was updated successfully.</div>);
 */
export const success = (title, content, handleOk) => {
  Modal.success({
    title: title,
    content: content,
    onOk: handleOk,
    centered: true,
  });
};

/**
 * Displays a modal with an error message.
 *
 * @param {string} title - The title of the modal.
 * @param {string|React.ReactNode} content - The content to display in the modal. Can be a simple string or a React component.
 * @param {Function} [handleOk=() => null] - The function to execute when the OK button is clicked. Defaults to simply dismissing the modal if not provided.
 * @example
 * error('Error', 'The operation failed.', () => console.log('Modal closed'));
 *
 * @example
 * // With JSX content and no special onOk behavior:
 * error('Profile Update', <div>The operation failed.</div>);
 */
export const error = (title, content, handleOk) => {
  Modal.error({
    title: title,
    content: content,
    onOk: handleOk,
    centered: true,
  });
};

export const EditWorker = ({ open, onCancel, selectedUser, editForm }) => {
  const [loading, setLoading] = useState(false);

  const submitForm = async () => {
    try {
      setLoading(true);
      const values = await editForm.validateFields();
      const response = await WorkerService.UpdateWorkerData(
        values,
        selectedUser.$id
      );
      onCancel();
      if (response.ok) {
        success("Success", "You have successfully edited a record", () => null);
      }
    } catch (e) {
      console.log(e);
      error(
        "Error",
        "Failed to edit user record. Please try again",
        () => null
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={`Edit ${selectedUser?.firstName}'s record`}
      centered
      open={open}
      onOk={submitForm}
      onCancel={onCancel}
      okText="Save"
      okButtonProps={{ loading: loading }}
      cancelButtonProps={{ disabled: loading }}
    >
      <Form
        size="large"
        form={editForm}
        name="edit-worker"
        layout="vertical"
        autoComplete="off"
        style={{
          maxWidth: 600,
        }}
      >
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
      </Form>
    </Modal>
  );
};
